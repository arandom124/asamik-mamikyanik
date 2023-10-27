import React, { useEffect } from "react";

import { useCategory } from "../../hooks";
import { ListCategories } from "../../components/Client";

export function Categories() {
  const { loading, categories, getCategories } = useCategory();

  useEffect(() => getCategories(), []);

  return (
    <>
    <h2 className="pt-10 pb-5 text-4xl font-black text-center text-white sm:text-4xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-blue-400">
          Seleccione una de las Opciones
          </span>
      </h2>
    <div>
      <h2>Categorias sta en pages client categories</h2>
      <br/>
      {loading ? <p>Cargando....</p> : <ListCategories categories={categories} />}
    </div>
    </>
  );
}
