import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../../products";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getProducts().then((response) => {
      setItems(response);
    });
  }, [items]);

  return <ItemList product={items} />;
}

export default ItemListContainer;
