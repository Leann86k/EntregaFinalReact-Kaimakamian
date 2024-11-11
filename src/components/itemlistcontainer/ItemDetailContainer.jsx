import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItemDetail = async () => {
      setLoading(true);
      const data = await fetch(`/api/products/${id}`).then((res) => res.json());
      setItem(data);
      setLoading(false);
    };

    fetchItemDetail();
  }, [id]);

  if (loading) return <div>Cargando...</div>;

  return (
    <div className="container mt-4">
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} className="img-fluid" />
      <p>{item.description}</p>
      <h3>${item.price}</h3>
      <button className="btn btn-success">Añadir al carrito</button>
    </div>
  );
}

export default ItemDetailContainer;
