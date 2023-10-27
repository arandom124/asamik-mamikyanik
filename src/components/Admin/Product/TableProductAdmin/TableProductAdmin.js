import React from "react";
import { Table, Image, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";

import "./TableProductAdmin.scss";

// PERTENECE A LOS PRODCUTOS DE VISTA ADMIN
export function TableProductAdmin(props) {
  const { products, updateProduct, deleteProduct } = props;

  if (!products) {
    return null; // Otra opción es mostrar un mensaje de carga o un componente de carga
  }
  return (
    <div className="grid grid-cols-4 gap-4">     
        {map(products, (product, index) => (
          <div className="col-span-1" key={index}>
            <div className="card bg-slate-900 bg-no-repeat">
            <figure className=" h-60 w-60">
              <img src={product.image} alt="Shoes"/>
            </figure>
            <div className="card-body">
            <h2 class=" text-orange-500 text-2xl">
            {product.category_data.title}
              <div class=" badge-secondary underline decoration-pink-500/30 text-4xl">$ {product.price} </div>
            </h2>
            <p className="card-title text-sky-500">{product.title}</p>
            
            <Table.Cell className="status text-lime-400 text-center"><h4 className="text-yellow-300">Producto Activo</h4> 
              {product.active ? <Icon name="check" /> : <Icon name="close" />}
            </Table.Cell>
            <Actions
              product={product}
              updateProduct={updateProduct}
              deleteProduct={deleteProduct}
            />
          </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Actions({ product, updateProduct, deleteProduct }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Button onClick={() => updateProduct(product)}>
        <i className="pencil alternate icon"></i>
      </Button>
      <Button negative onClick={() => deleteProduct(product)}>
        <i className="trash alternate icon"></i>
      </Button>
    </div>
  );
}