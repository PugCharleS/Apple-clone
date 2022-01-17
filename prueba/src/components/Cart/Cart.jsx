import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext';
import CartItem from './CartItem/CartItem';
import './Cart.css'

function Cart() {
  
  const { cartList, emptyCart } = useContext(CartContext);

  return (
    <div>
        <Bolsa />
        <button onClick={emptyCart}>Vaciar Carrito</button>
    </div>
  )
}

function Bolsa() {

  const { cartList, emptyCart } = useContext(CartContext);

  return (
    <div className="bolsa">
      <div className="bolsa-info">
        <h1>Tu bolsa contiene lo siguiente.</h1>
        <p>Obtén envío y devoluciones gratuitos en todos los pedidos.</p>
        <button>Pagar</button>
      </div>
      <hr />
      <div className="bolsa-products">
        { cartList.map(prod => <CartItem key={prod.id} prod={prod}/>) }
      </div>
    </div>
  );
}

export default Cart;
