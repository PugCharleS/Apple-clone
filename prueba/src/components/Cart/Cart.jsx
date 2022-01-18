import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext';
import CartItem from './CartItem/CartItem';
import './Cart.css'

function Cart() {
  
  const { emptyCart } = useContext(CartContext);

  return (
    <div className='contenedor-bolsa'>
      <Bolsa />

      <button id='empty' className='empty-cart' onClick={emptyCart}>Vaciar Carrito</button>
    </div>
  )
}

function Bolsa() {

  const { cartList } = useContext(CartContext);

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
