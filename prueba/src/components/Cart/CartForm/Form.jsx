import { createElement } from "react";
import { Alert } from "react-bootstrap";

import './Form.css';

export const Form = ({handleChange, validateForm, dataForm, makePurchase}) => {

  const showAlert = (e) => {
    e.preventDefault();
    const alerta = document.getElementById('alerta');
    alerta.append('Datos Incorrectos o Faltantes');   
    setTimeout(() => {
      alerta.innerHTML = '';
    }, 2000);
  }

  return (
    <form className="bolsa-info-form" id="form">
      <input
        type="text"
        name="name"
        id='name'
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
        id='email'
        name="email"
        placeholder="email"
        onChange={handleChange}
        value={dataForm.email}
        />
      <input
      type="email"
      id='email2'
      name="email2"
      placeholder="confirm email"
      onChange={handleChange}
      value={dataForm.email2}
      />
      <br />
      <br />
      <div id="alerta"></div>
      <br />
      {
        validateForm() ?
          <button className="bolsa-info-button" disabled={!validateForm()} onClick={makePurchase}>Pagar</button>
          :
          <button className="bolsa-info-button disabled-button" onClick={showAlert}>Pagar</button>

      }

    </form>  
  )
}