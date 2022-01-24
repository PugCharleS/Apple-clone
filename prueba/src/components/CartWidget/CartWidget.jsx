import {useContext, useState} from "react";
import { CartContext } from "../../context/cartContext";
import './CartWidget.css';

const CartWidget = () => {

  const { cartList } = useContext(CartContext);

  let total = 0;

  cartList.map(prod => total += prod.quantity)


  return (
    <div className="widget-container">
      <i className="fas fa-shopping-cart cart-widget"></i>
      { (cartList.length >= 1) ?
        <span className="cart-widget-number">{total}</span>
          :
        ''
      }
    </div>
  );
}

export default CartWidget;