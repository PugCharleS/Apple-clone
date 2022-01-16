import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext';

function Cart() {

  const { cartList, emptyCart } = useContext(CartContext);

  return (
    <div>
      { cartList.map(prod => <li key={prod.id}>{prod.name} - {prod.quantity}</li>) }
        <button onClick={emptyCart}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart;
