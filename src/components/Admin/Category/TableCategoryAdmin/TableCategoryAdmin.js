import React from 'react';
import { Button } from 'semantic-ui-react';
import { map } from 'lodash';

import "./TableCategoryAdmin.scss";

export function TableCategoryAdmin(props) {
  const { categories, updateCategory, deleteCategory } = props;

  if (!categories) {
    return null; // Otra opción es mostrar un mensaje de carga o un componente de carga
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {map(categories, (category, index) => (
        <div className="col-span-1" key={index}>
          <div className="card bg-slate-900 bg-no-repeat">
            <figure><img src={category.image} alt="Shoes" /></figure>
            <div className="card-body">
              <h3 className="card-title text-slate-400">
                <div className="badge badge-secondary text-xl">{category.title}</div>
              </h3>
              <Actions
                category={category}
                updateCategory={updateCategory}
                deleteCategory={deleteCategory}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Actions({ category, updateCategory, deleteCategory }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Button onClick={() => updateCategory(category)}>
        <i className="pencil alternate icon"></i>
      </Button>
      <Button negative onClick={() => deleteCategory(category)}>
        <i className="trash alternate icon"></i>
      </Button>
    </div>
  );
}
