import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../../ItemCount/ItemCount";
import { CartContext } from "../../../context/cartContext";

import './ItemDetail.css';

const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const [show, setShow] = useState(true);

  // setLoading(false);

  const onAdd = (counter) => {
    setShow(false);
    addItem({ ...product, quantity: counter });
  }

  return (
    <div>
        <NavDetalle product={product}/>
        <Detalle product={product} />
        {
          show ? <ItemCount onAdd={onAdd} product={product}/> 
            :
          <div className="detail-container">
            <div className="detail">
              <Link to={`/category`}><button className="detail__button">Ver mas productos</button></Link>
              <Link to={`/cart`}><button className="detail__button">Terminar Compra</button></Link>
            </div>
          </div>
        }
    </div>
  )
}

const NavDetalle = ({product}) => {

  const {id, name, ...obj} = product;

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

const Detalle = ({product}) => {
  return (
    <div className="detalle">
      <DetalleGeneral product={product} />
      <DetalleInfo product={product} />
    </div>
  );
}

const DetalleGeneral = ({product}) => {

  const {id, name, ...obj} = product;

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

const DetalleInfo = ({product}) => {

  return (
    <div className="detalle-info">
      <h2>{`${product.name} - ${product.color}`}</h2>
      <p>{product.size}</p>
      <p>{product.procesador}</p>
      <p>{product.storage}</p>
      <p>{product.ram}</p>
      <p>{product.color}</p>
      <p>{product.battery}</p>
      <a href="#procesador">Más información sobre el {product.procesador} Apple &gt;</a>
    </div>
  );
}

export default ItemDetail;
