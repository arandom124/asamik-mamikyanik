import React, { useState, useEffect } from "react";
import { size } from "lodash";
import { Link, useParams } from "react-router-dom";
import { Button } from "semantic-ui-react";

import { useProduct } from "../../hooks";
import { getProductsCart } from "../../api/cart";
import { ListProductCart } from "../../components/Client";

export function Cart() {
  const [products, setProducts] = useState(null);
  const [reloadCart, setReloadCart] = useState(false);
  const { getProductById } = useProduct();
  const { tableNumber } = useParams();

  useEffect(() => {
    (async () => {
      const idProductsCart = getProductsCart();
      const productsArray = [];

      for await (const idProduct of idProductsCart) {
        const response = await getProductById(idProduct);
        productsArray.push(response);
      }
      setProducts(productsArray);
    })();
  }, [reloadCart]);

  const onReloadCart = () => setReloadCart((prev) => !prev);

  return (
    <>
    {/* se marca id para el desplazamiento */}
    <div id="lista-pedidos" className="flex justify-end">
    <Link to={`/client/${tableNumber}`} className="btn btn-outline btn-primary">
          Atras
        </Link>
      </div>
    <div>
      
      <h2 className="pt-10 pb-5 text-4xl font-black text-center text-white sm:text-4xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-blue-400">
          Lista De Pedidos
          </span>
      </h2>
      {!products ? (
        <p>Cargando...</p>
      ) : size(products) === 0 ? (
        
        <div
          style={{
            textAlign: "center",
          }}
        >
          <p>Tu carrito esta vacio</p>
          {/* <Link to="/client/${tableNumber}/orders">
            <br />
            <Button TIENE ERRORES POR VERIFICARZ
            // className="btn btn-outline btn-secondary "
            primary>Ver perdidos</Button>
          </Link> */}
        </div>
      ) : (
        <ListProductCart products={products} onReloadCart={onReloadCart} />
      )}
    </div>
    </>
  );
}
