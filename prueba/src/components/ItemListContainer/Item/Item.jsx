import { Link } from "react-router-dom";

import './Item.css';

const Item = ({prod}) => {

  const {id, name, price, processor, storage, imageUrl, ram, size, color, battery} = prod;

  return (
    <div key={prod.id} className="wrapper">
      <div className="general-info">
        <img src={imageUrl} alt="" />
        <h2>{name}</h2>
        <p>Desde ${price}</p>
        <Link to={`/detalle/${id}`}><button className="general-info_button">Ver Detalle</button></Link>
        <hr></hr>
      </div>
      
      <div className="info">
        <p>{size}</p>
        <p>{processor}</p>
        <p>{storage}</p>
        <p>{ram}</p>
        <p>{color}</p>
        <p>{battery}</p>
      </div>
    </div>
  )
};

export default Item;