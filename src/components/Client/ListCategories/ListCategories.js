import React from "react";
import { Image } from "semantic-ui-react";
import { map } from "lodash";
import { useLocation, useHistory } from "react-router-dom";

import "./ListCategories.scss";

export function ListCategories(props) {
  const { categories } = props;
  const location = useLocation();
  const history = useHistory();

  const goToCategory = (id) => {
    history.push(`${location.pathname}/${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 ">
      {map(categories, (category) => (
        <div
          key={category.id}
          className="card bg-base-100 shadow-xl image-full"
          onClick={() => goToCategory(category.id)}
        >
          <figure>
            <img src={category.image} alt="Shoes" size="small" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-orange-500 text-4xl">
              {category.title}!
            </h2>
            <p className="text-sky-500 text-2xl">
              este es lista de categorias compo/client/listacate
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
