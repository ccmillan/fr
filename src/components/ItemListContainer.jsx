import { useEffect, useState } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  //   console.log(productos);

  useEffect(() => {
    pedirDatos().then((resp) => {
      setProductos(resp);
    });
  }, []);

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
