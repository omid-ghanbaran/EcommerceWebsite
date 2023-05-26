/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (item, id) => {
    const newItem = { ...item, amount: 1 };
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((product) => {
        if (product.id === id) {
          return { ...product, amount: cartItem.amount + 1 };
        } else {
          return { ...product };
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
