import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { useParams, Link } from "react-router-dom";
import { map, size, forEach } from "lodash";

import { OrderHistoryItem } from "../../components/Client";
import { ModalConfirm } from "../../components/Common";
import { useOrder, useTable, usePayment } from "../../hooks";

export function OrdersHistory() {
  const [showTypePayment, setShowTypePayment] = useState(false);
  const [isRequestAccount, setIsRequestAccount] = useState(false);
  const [idTable, setIdTable] = useState(null);
  const { loading, orders, getOrdersByTable, addPaymentToOrder } = useOrder();
  const { getTableByNumber } = useTable();
  const { tableNumber } = useParams();
  const { createPayment, getPaymentByTable } = usePayment();

  useEffect(() => {
    (async () => {
      const table = await getTableByNumber(tableNumber);
      const idTableTemp = table[0].id;
      setIdTable(idTableTemp);

      getOrdersByTable(idTableTemp, "", "ordering=-status,-created_at");
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (idTable) {
        const response = await getPaymentByTable(idTable);
        setIsRequestAccount(response);
      }
    })();
  }, [idTable]);

  const onCreatePayment = async (paymentType) => {
    setShowTypePayment(false);

    let totalPayment = 0;
    forEach(orders, (order) => {
      totalPayment += Number(order.product_data.price);
    });

    const paymentData = {
      table: idTable,
      totalPayment: totalPayment.toFixed(2),
      paymentType,
      statusPayment: "PENDING",
    };

    const payment = await createPayment(paymentData);
    for await (const order of orders) {
      await addPaymentToOrder(order.id, payment.id);
    }

    window.location.reload();
  };

  return (
    // se marca id para el desplazamiento
    <div id="lista-productos" className=" backdrop-opacity-5">
      <div className="flex justify-end">
          <Link to={`/client/${tableNumber}`} className="btn btn-outline btn-primary">
            Atras
          </Link>
        </div>
      <h2 className="pt-10 pb-5 text-4xl font-black text-center text-white sm:text-4xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-blue-400">
          Historial de pedidos
          </span>
      </h2>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
        
        <div className="flex justify-end ">
          
          {size(orders) > 0 && (
            
            
            <Button
            className="btn btn-outline btn-secondary "
              onClick={() =>
                size(isRequestAccount) === 0 && setShowTypePayment(true)
              }
            >
              {size(isRequestAccount) > 0
                ? "La cuenta ya esta pedida"
                : "Pedir la cuenta"}
            </Button>
            
          )}
          </div>
          {/* AQUI SE ARREGLO LAS FILAS Y COLUMNAS */}
          <div className="grid grid-cols-2 gap-3">
          {map(orders, (order, index) => (
            <OrderHistoryItem key={index} order={order} />
          ))}
          </div>
        </>
      )}

      <ModalConfirm
        title="Pagar con tarjeta o efectivo"
        show={showTypePayment}
        onCloseText="Efectivo"
        onClose={() => onCreatePayment("CASH")}
        onConfirmText="Tarjeta"
        onConfirm={() => onCreatePayment("CARD")}
      />
    </div>
  );
}
