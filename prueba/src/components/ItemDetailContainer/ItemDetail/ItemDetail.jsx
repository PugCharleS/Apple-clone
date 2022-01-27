import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../../ItemCount/ItemCount";
import { useContext } from 'react'
import { CartContext } from "../../../context/cartContext";
import './ItemDetail.css';

const ItemDetail = ({ producto }) => {
  const { addItem } = useContext(CartContext);

  const [show, setShow] = useState(true);

  const onAdd = (counter) => {
    setShow(false);
    addItem({ ...producto, quantity: counter });
  }

  return (
    <div>
      <NavDetalle producto={producto}/>
      <Detalle producto={producto} />
      {
        show ? <ItemCount onAdd={onAdd} producto={producto}/> 
          :
        <div className="detail-container">
          <div className="detail">
            <Link to={`/`}><button className="detail__button">Ver mas productos</button></Link>
            <Link to={`/cart`}><button className="detail__button">Terminar Compra</button></Link>
          </div>
        </div>
      }

    </div>
  )
}

export const NavDetalle = ({producto}) => {

  const {id, name, ...obj} = producto;

  return (
    <nav className="nav-detalle">
      <div className="nav-detalle-container">
        <h2>{name}</h2>
        <div>
          <ul className="nav-detalle-links">
            <li className="nav-detalle__link"><a href="#Descripcion">Descripcion general</a></li>
            <li className="nav-detalle__link"><a href="#Os">{obj.os}</a></li>
            <li className="nav-detalle__link"><a href="#Esp">Especificaciones</a></li>
          </ul>
        </div>
      </div>
      <hr />
    </nav>
  );
}

export const Detalle = ({producto}) => {
  return (
    <div className="detalle">
      <DetalleGeneral producto={producto} />
      <DetalleInfo producto={producto} />
    </div>
  );
}

export const DetalleGeneral = ({producto}) => {

  const {id, name, ...obj} = producto;

  return (
    <div className="general">
      <img className="general__img" src={obj.imageUrl} alt={name} />
      <a className="general__link" href="#Galeria">Ver la galeria</a>
      <div className="general-envio">
        <p>Envío sin costo en todos los pedidos</p>
        <p>Devoluciones fáciles y sin costo</p>
      </div>
      <div className="general-help">
        <p>¿Necesitas ayuda para comprar un {name}?</p>
        <a href="#Especialista">Habla con un Especialista</a>
      </div>
    </div>
  );
}

export const DetalleInfo = ({producto}) => {

  return (
    <div className="detalle-info">
      <h2>{`${producto.name} - ${producto.color}`}</h2>
      <p>{producto.size}</p>
      <p>{producto.procesador}</p>
      <p>{producto.storage}</p>
      <p>{producto.ram}</p>
      <p>{producto.color}</p>
      <p>{producto.battery}</p>
      <a href="#procesador">Más información sobre el {producto.procesador} Apple &gt;</a>
    </div>
  );
}

export default ItemDetail;
