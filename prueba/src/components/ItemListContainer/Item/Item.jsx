import { Link } from "react-router-dom";

import './Item.css';

const Item = ({prod}) => {

  const {id, nombre, precio, ...obj } = prod;

  return (
    <div key={id} className="item">
      <img src={obj.img} alt={nombre}></img>
      <div className="item-texts">
        <i className="fas fa-info-circle info-icon"></i>
        <h2 className="item-texts__h2">{nombre}</h2>
        <p className="item-texts__price"><strike>${(precio+30)}</strike><span>${precio}</span></p>
        {/* <p className="item-texts__desc">{desc}</p> */}
        <Link to={`/detalle/${id}`}><button className="addBtn">Ver Detalle</button></Link>
      </div>
    </div>
  );
};

export default Item;