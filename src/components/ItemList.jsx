import React from "react";
import Item from "./Item";
import { toCapital } from "../helpers/toCapital";

const ItemList = ({ productos, titulo }) => {
  //   console.log(productos);
  return (
    <div className="container">
      <h2 className="main-tittle">{toCapital(titulo)}</h2>

      <div className="productos">
        {productos.map((prod) => (
          <Item producto={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
