import { formatter } from '../../../Formatter/Formatter';
import { useContext } from "react";
import { CartContext } from '../../../../context/cartContext';

import './CartItem.css';

const CartItem = ({prod}) => { 
  return (
    <>
      <div className='item-container'>
        <ItemContainer key={prod.id} prod={prod} />  
      </div>
      <hr />
    </>
  )
}


export const ItemContainer = ({prod}) => {
  const { deleteItem } = useContext(CartContext);
  const onDelete = ({prod}) => {
    deleteItem({prod});
  }
  return (
    <>
      <ItemContainerImg prod={prod} />
      <div className="item-container-info">
        <ItemContainerPrice onDelete={onDelete} prod={prod} />
        <hr />
        <AppleCareItem prod={prod}/>
        <hr />
        <EnvioInfoItem />
      </div>
    </>
  );
}


export const ItemContainerImg = ({prod}) => {
  return (
    <div className="item-container__img">
      <img src={prod.imageUrl} alt={prod.name} />
    </div>
  );
}


export const ItemContainerPrice = ({onDelete, prod}) => {
  return (
    <div className="item-container-price">
      <h2>{`${prod.name} - ${prod.color} - ${prod.storage}`}</h2>
      <h2>{prod.quantity}</h2>
      <div className="item-container-price__pr">
        <h2>{formatter.format((prod.price*prod.quantity))}</h2>
        <button onClick={() => onDelete({prod})} href="#" className='item-container-price__delete'>Eliminar</button>
      </div>
    </div>
  );
}


export const AppleCareItem = ({prod}) => {
  return (
    <div className="apple-care">
      <div className="apple-care-info">
        <h3>Agrega AppleCare<span>+</span> para {prod.name} por {formatter.format(prod.price*0.18)}</h3>
        <p>Obtén hasta tres años de soporte técnico y protección contra daños accidentales.</p>
        <a href="#info">M&aacute;s informaci&oacute;n {'>'}</a>
      </div>
      <div className="apple-care-add">
        <a href="#Agregar">Agregar</a>
      </div>
    </div>
  );
}


export const EnvioInfoItem = () => {
  return (
    <div className="envio-info">
      <h3>Descubre qué tan pronto puedes recibir este artículo. <a href='#cp'>Ingresa el código postal</a></h3>
      <p>Envío 5-7 días hábiles.</p>
    </div>
  );
}


export default CartItem;
