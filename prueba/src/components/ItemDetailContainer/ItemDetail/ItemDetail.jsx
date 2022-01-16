import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../../ItemCount/ItemCount";
import { useContext } from 'react'
import { CartContext } from "../../../context/cartContext";
import './ItemDetail.css';

const ItemDetail = ({ producto }) => {

  const {id, name, price, procesador, storage, img, ram, size, color, battery, os} = producto;


  const { addItem } = useContext(CartContext);

  const [show, setShow] = useState(true);

  const onAdd = (counter) => {
    setShow(false);
    addItem({ ...producto, quantity: counter });
  }

  return (
    <div>
      <nav className="nav-detalle">
        <div className="nav-detalle-container">
          <h2>{name}</h2>
          <div>
            <ul className="nav-detalle-links">
              <li className="nav-detalle__link"><a href="#">Descripcion general</a></li>
              <li className="nav-detalle__link"><a href="#">{os}</a></li>
              <li className="nav-detalle__link"><a href="#">Especificaciones</a></li>
            </ul>
          </div>
        </div>
        <hr />
      </nav>
      <div className="detalle">
        <div className="general">
          <img className="general__img" src={img} alt={name} />
          <a className="general__link" href="#">Ver la galeria</a>
          <div className="general-envio">
            <p>Envío sin costo en todos los pedidos</p>
            <p>Devoluciones fáciles y sin costo</p>
          </div>
          <div className="general-help">
            <p>¿Necesitas ayuda para comprar un {name}?</p>
            <a href="#">Habla con un Especialista</a>
          </div>
        </div>
        <div className="detalle-info">
          <h2>{`${name} - ${color}`}</h2>
          <p>{size}</p>
          <p>{procesador}</p>
          <p>{storage}</p>
          <p>{ram}</p>
          <p>{color}</p>
          <p>{battery}</p>
          <a href="#">Más información sobre el {procesador} Apple &gt;</a>
        </div>
      </div>

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

export default ItemDetail;
