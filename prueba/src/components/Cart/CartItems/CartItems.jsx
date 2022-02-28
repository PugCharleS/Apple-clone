import React from 'react'
import CartItem from "../CartItems/CartItem/CartItem";

const CartItems = ({cartList}) => {

  return (
    <div className="bolsa-products">
      {cartList.map((prod) => (
        <CartItem key={prod.id} prod={prod} />
      ))}
    </div>
  )
}

export default CartItems;