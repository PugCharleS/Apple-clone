import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../../ItemCount/ItemCount";
import useCounter from "../../ItemCount/useCounter";

const ItemDetail = ({ producto }) => {

  const [show, setShow] = useState();

  const onAdd = (counter) => {
    setShow(false);
  }

  return (
    <div>
      <h3>Detalle</h3>
      <h4>{producto.nombre}</h4>
      <img src={producto.img} alt={producto.nombre} style={{width: '400px'}} />

      {
        show ? <ItemCount onAdd={onAdd} /> 
          :
        <div>
          <Link to={`/`}><button>Ver mas producto</button></Link>
          <ItemCount />
          <Link to={`/cart`} onClick={() => onAdd()}><button>Terminar la compra</button></Link>
        </div>
      }

    </div>
  )
}

export default ItemDetail;
