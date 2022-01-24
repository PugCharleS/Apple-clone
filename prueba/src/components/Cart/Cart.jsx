import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/cartContext';
import CartItem from './CartItem/CartItem';
import { formatter } from '../Formatter/Formatter'; 
import './Cart.css';
import { Link } from 'react-router-dom';

function Cart() {
  
  const { emptyCart, cartList } = useContext(CartContext);

  return (
    <div className='contenedor-bolsa'>
      <Bolsa />
      {
        (cartList.length >= 1 ) ?
          <button id='empty' className='empty-cart' onClick={emptyCart}>Vaciar Carrito</button>
            :
          <Link to={'/'}><button className='empty-cart'>Ir al Home</button></Link>
      }
    </div>
  )
}

function Bolsa() {

  const { cartList } = useContext(CartContext);
  
  let total = 0;

  cartList.map(( prod ) => {
    total += prod.price*prod.quantity;
    return total;
  });

  return (
    
    (cartList.length >= 1) ?
      <div className="bolsa">
        <div className="bolsa-info" id='bolsa'>
          <h1>Tu bolsa contiene lo siguiente {
            formatter.format(total)
            }</h1>
          <p>Obtén envío y devoluciones gratuitos en todos los pedidos.</p>
          <button>Pagar</button>
        </div>
        <hr />
        <div className="bolsa-products">
          { cartList.map(prod => <CartItem key={prod.id} prod={prod}/>) }
        </div>
      </div>
        :
      <div className="bolsa">
        <div className="bolsa-info">
          <h1>Tu bolsa est&aacute; vac&iacute;a</h1>
        </div>
      </div>

  );
}

export default Cart;
