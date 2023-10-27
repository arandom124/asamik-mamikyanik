import React from "react";
import { Image } from "semantic-ui-react";
import classNames from "classnames";
import moment from "moment";
import "moment/locale/es";

import { ORDER_STATUS } from "../../../utils/constants";
import "./OrderHistoryItem.scss";

export function OrderHistoryItem(props) {
  const { order } = props;
  const { title, image } = order.product_data;

  return (
    
      <div
        className={classNames("order-history-item card card-side shadow-xl border-dotted", {
          [order.status.toLowerCase()]: true,
        })}
      >
        <div className="order-history-item__time border-dashed rounded-full border-orange-500">
          {/* <span>  HACE PARTE DE LA HORA MINUTOS
            Pedido {moment(order.created_at).startOf("second").fromNow()}
          </span><br/> */}
          {order.status === ORDER_STATUS.PENDING ? (
                <span>En marcha</span>
              ) : (
                <span>Entregado</span>
              )}
        </div>
        <figure className="order-history-item__product">
          <Image src={image} />
          <p>{title}</p>
        </figure>        
      </div>
    
  );
}
