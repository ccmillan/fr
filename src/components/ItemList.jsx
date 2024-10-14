import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  console.log(productos);
  return (
    <div className="container">
      <h2 className="main-tittle">Productos</h2>

      <div className="productos">
        {productos.map((prod) => (
          <Item producto={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
