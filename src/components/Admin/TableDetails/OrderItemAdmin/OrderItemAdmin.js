import React from "react";
import { Button, Image } from "semantic-ui-react";
import classNames from "classnames";
import moment from "moment";
import "moment/locale/es";

import { ORDER_STATUS } from "../../../../utils/constants";
import { useOrder } from "../../../../hooks";
import "./OrderItemAdmin.scss";

export function OrderItemAdmin(props) {
  const { order, onReloadOrders } = props;
  const { title, image } = order.product_data;
  const { checkDeliveredOrder } = useOrder();

  const onCheckDeliveredOrder = async () => {
    await checkDeliveredOrder(order.id);
    onReloadOrders();
  };

  return (
    <div
      className={classNames("order-item-admin card card-side bg-base-100 shadow-xl", {
        [order.status.toLowerCase()]: true,
      })}
    >
      <span className="order-item-admin__time font-mono text-1xl rounded-full border-red-600 border-dashed">
        <span>{moment(order.created_at).format("HH:mm")}</span> {" - "}
        <span>{moment(order.created_at).startOf("seconds").fromNow()}</span>
      </span>
      <figure>
        <div className="order-item-admin__product" alt="Movie">
          <Image src={image} />
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}!</h2>
        <div className="card-actions justify-end">
          {order.status === ORDER_STATUS.PENDING && (
            <Button primary onClick={onCheckDeliveredOrder} className="btn btn-primary">
              Marcar entregado
            </Button>
          )}
        </div>
      </div>
    </div>
    
  );
}
