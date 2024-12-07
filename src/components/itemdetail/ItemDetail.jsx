import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
export const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useContext(CartContext);
  const handleadd = () => {
    const productToAdd = {
      id: item.id,
      title: item.title,
      description: item.description,
      imagen: item.imagen,
      price: item.price,
      quantity: quantity,
    };
    addItem(productToAdd);
  };

  return (
    <div>
      <h2>{item.title}</h2>
      <img src={item.imagen} alt={item.title} className="img-fluid" />
      <p>{item.description}</p>
      <h3>${item.price}</h3>
      <button> - </button>
      <span> {quantity} </span>
      <button> + </button>
      <button className="btn btn-success" onClick={handleadd}>
        Añadir al carrito
      </button>
    </div>
  );
};
