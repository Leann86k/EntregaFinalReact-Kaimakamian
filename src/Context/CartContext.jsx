import { createContext, useState } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const isInCart = (id) => {
    console.log(cart);
    return cart.some((prod) => prod.id === id);
  };
  const addItem = (productToAdd) => {
    console.log(productToAdd);
    if (!isInCart(productToAdd.id)) {
      setCart((prev) => [...prev, productToAdd]);
    } else {
      setCart((prev) =>
        prev.map((item) =>
          item.id == productToAdd.id
            ? {
                ...item,
                quantity: item.quantity + productToAdd.quantity,
              }
            : item
        )
      );
    }
    console.log(cart);
  };
  const obj = {
    addItem,
  };
  return <CartContext.Provider value={obj}>{children}</CartContext.Provider>;
};
