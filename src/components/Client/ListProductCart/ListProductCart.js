import React, { useState, useEffect } from "react";
import { Image, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";
import { useParams, useHistory } from "react-router-dom";

import { useOrder, useTable } from "../../../hooks";
import { removeProductCartApi, cleanProductCartApi } from "../../../api/cart";
import "./ListProductCart.scss";
// HACE PARTE DEL CARRITO DE PEDIDOS LISTA----------------------------
export function ListProductCart(props) {
  const { products, onReloadCart } = props;
  const [total, setTotal] = useState(0);
  const { addOrderToTable } = useOrder();
  const { getTableByNumber } = useTable();
  const { tableNumber } = useParams();
  const history = useHistory();

  useEffect(() => {
    let totalTemp = 0;
    products.forEach((product) => {
      totalTemp += Number(product.price);
    });
    setTotal(totalTemp.toFixed(2));
  }, [products]);

  const removeProduct = (index) => {
    removeProductCartApi(index);
    onReloadCart();
  };

  const createOrder = async () => {
    const tableData = await getTableByNumber(tableNumber);
    const idTable = tableData[0].id;
    for await (const product of products) {
      await addOrderToTable(idTable, product.id);
    }
    cleanProductCartApi();
    history.push(`/client/${tableNumber}/orders`);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th className="text-sky-400 font-bold">Imagen</th>
            <th className="text-sky-400 font-bold">Nombre Producto</th>
            <th className="text-sky-400 font-bold">Precios</th>
            <th className="text-sky-400 font-bold">Acción</th>
          </tr>
        </thead>
        <tbody>
          {map(products, (product, index) => (
            <tr key={index}>
              <td>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={product.image} alt="Avatar" />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <h3 className="text-amber-300">{product.title}</h3>
                <br />
              </td>
              <td> 
                <h3 className="text-orange-400">$ {product.price}</h3>
                </td>
              <td>
                <button
                  className="btn btn-ghost btn-xs text-amber-200"
                  name="close"
                  onClick={() => removeProduct(index)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <div className="flex justify-center rounded-full ">
        <Button 
          className="btn btn-outline btn-secondary " 
          onClick={createOrder}>
            Realizar pedido ($ {total})
        </Button>
      </div><br />
    </div>
  );
}
