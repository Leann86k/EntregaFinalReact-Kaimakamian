import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { ItemDetail } from "./ItemDetail";
import { db } from "../../firebase/config";

function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getDoc(doc(db, "productos", id)).then((shot) => {
      const produ = { ...shot.data(), id: shot.id };
      setItem(produ);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <div>Cargando...</div>;

  return (
    <div className="container mt-4">
      <ItemDetail item={item} />
    </div>
  );
}

export default ItemDetailContainer;
