import useCounter from "./useCounter";
import { formatter } from '../Formatter/Formatter';
import './ItemCount.css';

const ItemCount = ({ onAdd, producto }) => {
  
  const { counter, increment, decrement } = useCounter(1);

  return (
    <div className="counter-container">
      <div className="counter">
        <div className="counter-envio">
          <h3>Se envia:</h3>
          <p>5-7 dias habiles</p>
          <p>Envio sin costo</p>
          <a href="#fechas">Ver fechas de entrega</a>
        </div>
        <div className="counter-precio">
          {
            counter >= 2 ?
              <h2>{formatter.format((producto.price*counter))} - {counter}</h2>
              :
              <h2>{formatter.format((producto.price*counter))}</h2>
          }
          {
            counter > 1 ? 
              <button id="minus" className="counter-precio__button-num " onClick={decrement}>-</button>
                :
              <button id="minus" disabled className="counter-precio__button-num counter-precio__button-num-disabled" onClick={decrement}>-</button>
          }
          <button className="counter-precio__button" onClick={() => onAdd(counter)}>Agregar a la bolsa</button>
          <button className="counter-precio__button-num" onClick={increment}>+</button>
        </div>
      </div>
    </div>
  );
}

export default ItemCount;