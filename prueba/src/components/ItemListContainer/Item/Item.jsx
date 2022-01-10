import React from "react";
import './Item.css';

const Item = (props) => {

  const { id, nombre, precio, categoria, img, cantidad } = props;

  return (
    <div className="item" key={id}>
      <img src={img} alt={nombre}></img>
      <div className="item-texts">
        <i className="fas fa-info-circle info-icon"></i>
        <h2 className="item-texts__h2">{nombre}</h2>
        <p className="item-texts__price"><strike>${(precio+30)}</strike><span>${precio}</span></p>
        {/* <p className="item-texts__desc">{desc}</p> */}
        <button className="addBtn">Agregar al Carrito</button>
      </div>
    </div>
  );
};

export default Item;