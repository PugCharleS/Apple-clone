import { Link } from "react-router-dom";

import './Item.css';

const Item = ({prod}) => {

  return (
    <div key={prod.id} className="item">
      <img src={prod.img} alt={prod.nombre}></img>
      <div className="item-texts">
        <i className="fas fa-info-circle info-icon"></i>
        <h2 className="item-texts__h2">{prod.nombre}</h2>
        <p className="item-texts__price"><strike>${(prod.precio+30)}</strike><span>${prod.precio}</span></p>
        {/* <p className="item-texts__desc">{desc}</p> */}
        <Link to={`/detalle/${prod.id}`}><button className="addBtn">Ver Detalle</button></Link>
      </div>
    </div>
  );
};

export default Item;