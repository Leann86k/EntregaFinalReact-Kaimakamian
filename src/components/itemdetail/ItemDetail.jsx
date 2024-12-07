import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
export const ItemDetail = ({ item }) => {
	const [quantity, setQuantity] = useState(1);
	const { addItem } = useContext(CartContext);

	const handleIncrement = () => {
		setQuantity((prev) => prev + 1);
	};

	const handleDecrement = () => {
		if (!item) return;
		setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
	};

	const handleadd = () => {
		if (!item?.id) return;
		const productToAdd = {
			id: item.id,
			title: item.title,
			description: item.description,
			imagen: item.imagen,
			price: item.price,
			quantity: quantity,
		};
		console.log(productToAdd);
		addItem(productToAdd);
	};

	if (!item) return <div>Loading...</div>;

	return (
		<div>
			<h2>{item.title}</h2>
			<img src={item.imagen} alt={item.title} className="img-fluid" />
			<p>{item.description}</p>
			<h3>${item.price}</h3>
			<button onClick={handleDecrement}> - </button>
			<span> {quantity} </span>
			<button onClick={handleIncrement}> + </button>
			<button className="btn btn-success" onClick={handleadd}>
				Añadir al carrito
			</button>
		</div>
	);
};
