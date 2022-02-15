import React from 'react';

const Order = ({idOrder, dataForm}) => {
  return (
    <div className='order-info'>
      <br />
      <br />
      <br /><br /><br />
      <h1>Gracias por tu compra {dataForm.name}</h1>
      <h1>El id de tu compra es: {idOrder}</h1>
      <br />
      <h2>La descripción de tu compra será enviada al correo:</h2>
      <h3>{dataForm.email}</h3>

      {

      }  
    </div>
  );
};

export default Order;
