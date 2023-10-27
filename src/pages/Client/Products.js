import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { useProduct } from "../../hooks";
import { ListProducts } from "../../components/Client";

export function Products() {
  const { tableNumber, idCategory } = useParams();
  const { loading, products, getProductsByCategory } = useProduct();

  useEffect(() => getProductsByCategory(idCategory), [idCategory]);

  return (
    <>
    
      <div className=" text-neutral-content  ">
        <div className="mb-4 flex justify-end mt-8">
          <Link to={`/client/${tableNumber}`} className="btn btn-outline btn-primary">
            Volver a categorías pages-client-produc
          </Link>
        </div>
        {/* se agreagr loader de daicyui */}
        {loading ? <span className="loading loading-spinner text-primary"></span> : 
        <ListProducts products={products} />}
        
      </div>
    </>
  );
}