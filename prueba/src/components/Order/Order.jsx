import React from 'react';

const Order = ({idOrder, cartList, dataForm}) => {
  return (
    <div>
      <h1>Gracias por tu compra {dataForm.name}</h1>
      <h1>El id de su compra es: {idOrder}</h1>
    </div>
  );
};

export default Order;
