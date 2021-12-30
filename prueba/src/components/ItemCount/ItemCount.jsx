// This is my component

import React from "react";
import useCounter from "./useCounter";
import './ItemCount.css';

const ItemCount = () => {

  const { counter, increment, decrement, reset } = useCounter(1);

  return (
    <div className="counter">
      <h2 className="counter_text">{counter}</h2>
      <div className="counter_buttons">
        <button className="decrement " onClick={decrement}>-</button>
        <button onClick={reset}>reset</button>
        <button className="increment" onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default ItemCount;