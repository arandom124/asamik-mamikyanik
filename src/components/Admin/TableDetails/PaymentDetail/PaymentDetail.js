import React from "react";
import { Table, Button, Icon } from "semantic-ui-react";

import { usePayment, useOrder } from "../../../../hooks";
import "./PaymentDetail.scss";

export function PaymentDetail(props) {
  const { payment, orders, openCloseModal, onReloadOrders } = props;

  const { closePayment } = usePayment();
  const { closeOrder } = useOrder();

  const getIconPayment = (key) => {
    if (key === "CARD") return "credit card outline";
    if (key === "CASH") return "money bill alternate outline";
    return null;
  };

  const onCloseTable = async () => {
    const result = window.confirm("Estas seguro de cerrar la mesa?");
    if (result) {
      await closePayment(payment.id);

      for await (const order of orders) {
        await closeOrder(order.id);
      }
      await onReloadOrders();
      openCloseModal();
    }
  };

  return (
    <div className="payment-detail">
      <Table striped>
        <Table.Body>
          <Table.Row>
            <Table.Cell
            className=" text-sky-400 font-bold"
            >Mesa:</Table.Cell>
            <Table.Cell
            className="text-amber-300"
            >{payment.table_data.number}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell
            className=" text-sky-400 font-bold"
            >Total:</Table.Cell>
            <Table.Cell
            className="text-amber-300"
            >$ {payment.totalPayment} </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell
            className=" text-sky-400 font-bold"
            >Forma de pago:</Table.Cell>
            <Table.Cell>
              <Icon 
              className="text-amber-300"
              name={getIconPayment(payment.paymentType)} />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <div className="flex justify-center mt-8 bg">
          <button
            className="btn btn-outline btn-success"
            onClick={onCloseTable}
          >
            Marcar como pagado y cerrar mesa
          </button>
        </div>
    </div>
  );
}
