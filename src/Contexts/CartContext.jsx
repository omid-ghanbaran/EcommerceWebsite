/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amount = cart.reduce((acc, cur) => {
      return acc + cur.amount;
    }, 0);
    setItemAmount(amount);
  }, [cart]);
  useEffect(() => {
    const totalPrice = cart.reduce((acc, cur) => {
      return acc + cur.price * cur.amount;
    }, 0);
    setTotal(totalPrice);
  }, [cart]);

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

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

  const clearCart = () => {
    setCart([]);
  };

  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem.amount !== 1) {
      const newCart = cart.map((item) => {
        if (item.id == id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return { ...item };
        }
      });
      setCart(newCart);
    } else {
      removeFromCart(id);
    }
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
