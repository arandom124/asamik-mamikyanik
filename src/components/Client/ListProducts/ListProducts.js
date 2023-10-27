import React from "react";
import { Image, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";
import { toast } from "react-toastify";

import { addProductCart } from "../../../api/cart";
import "./ListProducts.scss";

export function ListProducts(props) {
  const { products } = props;

  const addCart = (product) => {
    addProductCart(product.id);
    toast.success(`${product.title} Agregado al carrito`);
  };

  return (
    <>
    <h2 className="pt-10 pb-5 text-4xl font-black text-center text-white sm:text-4xl">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-blue-400">
      Seleccione una Opción
      </span>
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {map(products, (product, index) => (
        <div key={index} className="card bg-base-100 shadow-xl">
          <figure className="w-40 h-40">
            <img src={product.image} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <p className="text-xl text-sky-300 font-bold">
                {product.title}
              </p>
            </h2>
            <p>compon/client/lisprodu?</p>
            <div className="">
              <div className="stat-title">Precios</div>
              <div className="stat-value text-orange-500">
                $ {product.price}
              </div>
              <div className="stat-actions">
                <Button
                  className="btn btn-sm btn-success animate-pulse w-10 h-10"
                  primary
                  icon
                  onClick={() => addCart(product)}
                >
                  <Icon name="add" />
                </Button>
              </div>
            </div>
            <div className="card-actions justify-end">
              <div className="badge badge-accent badge-outline badge-lg text-xl">
                {product.category_data.title}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
