import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {

  const [cartList, setCartList] = useState([]);

  function addItem(item) {
    if (cartList.length === 0) {
      setCartList([...cartList, item]);
      console.log(cartList);
      return false;
    } else {
      for (const prod of cartList) {
        if (prod.id === item.id) {
          prod.quantity+=item.quantity;
          setCartList([...cartList]);
          console.log(cartList);
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

  const total = () => {
    const total = cartList.reduce( 
      (prev, curr) => prev + curr.price*curr.quantity, 0);
      return total;
  }
  
  const totalProducts = () => {
    const total = cartList.reduce(
      (prev, curr) => prev + curr.quantity, 0)
      return total;
  }

  return (
    <CartContext.Provider value={{
      cartList,
      addItem,
      emptyCart,
      deleteItem,
      total,
      totalProducts
    }}>
      { children }
    </CartContext.Provider>
  );
}