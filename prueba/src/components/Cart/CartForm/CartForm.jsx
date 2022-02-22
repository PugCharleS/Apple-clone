import React from 'react'
import { Form } from "./Form";

const CartForm = ({handleChange, dataForm, makePurchase}) => {
  const validateForm = () => {
    return (
        dataForm.phone && 
        dataForm.email && 
        dataForm.email2 &&
        dataForm.name && 
        (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(dataForm.email)) && 
        (/^[ÁÉÍÓÚA-Z][a-záéíóú]+(\s+[ÁÉÍÓÚA-Z]?[a-záéíóú]+)*$/.test(dataForm.name) && dataForm.email === dataForm.email2)        
    );
  }

  return (
    <Form handleChange={handleChange} dataForm={dataForm} validateForm={validateForm} makePurchase={makePurchase}/>
  )
}

export default CartForm;