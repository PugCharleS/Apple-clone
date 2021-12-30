import React from "react";
import './Item.css';

const Item = (props) => {

  const { prod } = props;

  return (
    <div className="item" key={prod.id}>
      <img src={prod.img} alt={prod.nombre}></img>
      <div className="item-texts">
        <i className="fas fa-info-circle info-icon"></i>
        <h2 className="item-texts__h2">{prod.nombre}</h2>
        <p className="item-texts__price"><strike>${(prod.precio+30)}</strike><span>${prod.precio}</span></p>
        <p className="item-texts__desc">{prod.desc}</p>
        <button className="addBtn">Agregar al Carrito</button>
      </div>
    </div>
  );
};

export default Item;