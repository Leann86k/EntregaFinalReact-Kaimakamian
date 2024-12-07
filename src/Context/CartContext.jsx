import { createContext, useState } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const isInCart = (id) => cart.some((prod) => prod.id === id);

	const addItem = (productToAdd) => {
		if (!isInCart(productToAdd.id)) {
			setCart((prev) => [...prev, productToAdd]);
		} else {
			setCart((prev) =>
				prev.map((item) =>
					item.id === productToAdd.id
						? { ...item, quantity: item.quantity + productToAdd.quantity }
						: item
				)
			);
		}
	};

	const removeItem = (id) => {
		setCart((prev) => prev.filter((item) => item.id !== id));
	};

	const clearCart = () => setCart([]);

	const getTotalQuantity = () => {
		return cart.reduce((total, item) => total + item.quantity, 0);
	};

	const getTotalPrice = () => {
		return cart.reduce((total, item) => total + item.price * item.quantity, 0);
	};

	const value = {
		cart,
		addItem,
		removeItem,
		clearCart,
		getTotalQuantity,
		getTotalPrice,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
