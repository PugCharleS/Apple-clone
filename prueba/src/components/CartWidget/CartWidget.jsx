import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import './CartWidget.css';

const CartWidget = () => {

  const { cartList, totalProducts } = useContext(CartContext);

  return (
    <div className="widget-container">
      <i className="fas fa-shopping-cart cart-widget"></i>
      { (cartList.length >= 1) ?
        // Total de carritos
        <span className="cart-widget-number">{totalProducts()}</span>
          :
        ''
      }
    </div>
  );
}

export default CartWidget;