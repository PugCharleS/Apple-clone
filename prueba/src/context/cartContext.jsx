import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {

  const [cartList, setCartList] = useState([]);

  function addItem(item) {
    if (cartList.length === 0) {
      setCartList([...cartList, item]);
      return false;
    } else {
      for (const prod of cartList) {
        if (prod.id === item.id) {
          prod.quantity+=item.quantity;
          setCartList([...cartList]);
          return false;
        } 
      }
      setCartList([...cartList, item]);
    }
  }

  function deleteItem({prod}) {
    cartList.splice(cartList.indexOf(prod), 1);
    setCartList([...cartList]);
  }

  function emptyCart() {
    setCartList([]);
  }

  return (
    <CartContext.Provider value={{
      cartList,
      addItem,
      emptyCart,
      deleteItem,
    }}>
      { children }
    </CartContext.Provider>
  );
}

