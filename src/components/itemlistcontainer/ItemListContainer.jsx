import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    const productoRef = category
      ? query(collection(db, "productos"), where("category", "==", category))
      : collection(db, "productos");
    getDocs(productoRef).then((response) => {
      setProductos(
        response.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, [category]);

  return <ItemList productos={productos} />;
}

export default ItemListContainer;
