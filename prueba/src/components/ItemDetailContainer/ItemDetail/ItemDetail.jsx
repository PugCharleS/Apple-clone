import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../../ItemCount/ItemCount";
import { useContext } from 'react'
import { CartContext } from "../../../context/cartContext";

const ItemDetail = ({ producto }) => {

  const { addItem } = useContext(CartContext);

  const [show, setShow] = useState(true);

  const onAdd = (counter) => {
    setShow(false);
    addItem({ ...producto, quantity: counter });
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
          <Link to={`/`}><button>Ver mas productos</button></Link>
          <Link to={`/cart`}><button>Terminar Compra</button></Link>
        </div>
      }

    </div>
  )
}

export default ItemDetail;
