import React from 'react';
import './CartForm.css'

const CartForm = ({handleChange, makePurchase, dataForm}) => {

  return (
    <form className="bolsa-info-form" onSubmit={makePurchase}>
      <input
        type="text"
        name="name"
        placeholder="name"
        onChange={handleChange}
        value={dataForm.name}
      />
      <br />
      <input
        type="text"
        name="phone"
        placeholder="phone"
        onChange={handleChange}
        value={dataForm.phone}
      />
      <br />
      <input
        type="email"
        name="email"
        placeholder="email"
        onChange={handleChange}
        value={dataForm.email}
      />
      <br />
      <br />
      <button className="bolsa-info-button">Pagar</button>
    </form>  
  )
}

export default CartForm;

