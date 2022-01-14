import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {

  const [cartList, setCartList] = useState([]);

  function addItem(items) {
    setCartList([...cartList, items]);
  }

  function emptyCart() {
    setCartList([]);
  }

  return (
    <CartContext.Provider value={{
      cartList,
      addItem,
      emptyCart
    }}>
      { children }
    </CartContext.Provider>
  );
}

