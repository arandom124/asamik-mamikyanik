import React, { useState, useEffect } from "react";
import { size } from "lodash";
import { Label,} from "semantic-ui-react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import { ORDER_STATUS } from "../../../../utils/constants";
import { getOrdersByTableApi } from "../../../../api/orders";
import { ReactComponent as IcTable } from "../../../../assets/table.svg";
import { usePayment } from "../../../../hooks";
import "./TableAdmin.scss";

// CORRESPONDE ALA SALA DE LAS MESA Y LAS NOTIFI_______________________________________________

export function TableAdmin(props) {
  const { table, reload } = props;
  const [orders, setOrders] = useState([]);
  const [tableBusy, setTableBusy] = useState([]);
  const [pendingPayment, setPendingPayment] = useState(false);

  const { getPaymentByTable } = usePayment();

  useEffect(() => {
    (async () => {
      const response = await getOrdersByTableApi(
        table.id,
        ORDER_STATUS.PENDING
      );
      setOrders(response);
    })();
  }, [reload]);

  useEffect(() => {
    (async () => {
      const response = await getPaymentByTable(table.id);
      if (size(response) > 0) setPendingPayment(true);
      else setPendingPayment(false);
    })();
  }, [reload]);

  useEffect(() => {
    (async () => {
      const response = await getOrdersByTableApi(
        table.id,
        ORDER_STATUS.DELIVERED
      );
      if (size(response) > 0) setTableBusy(response);
      else setTableBusy(false);
    })();
  }, [reload]);

  return (
    <Link className="table-admin" to={`/admin/table/${table.id}`}>
      {size(orders) > 0 ? (
        <Label circular color="blue" className="animate-pulse ">
          {size(orders)} <p className="text-lg"> Pedidos</p>
        </Label>
      ) : null}

      {pendingPayment && (
        <Label circular color="green" className="animate-pulse">
          Cuenta 
        </Label>
      )}

      <IcTable
        className={classNames({
          pending: size(orders) > 0,
          busy: tableBusy,
          "pending-payment": pendingPayment,
        })}
      />
      <p className="text-orange-500 text-xl">Mesa {table.number}</p>
    </Link>
  );
}
