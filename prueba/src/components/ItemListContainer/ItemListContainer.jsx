import React from 'react';
import './ItemListContainer.css'

const ItemListContainer = (props) => {
  
  const { greeting } =  props;

  return(
    <div>
      <h2 className='greeting'>{greeting}</h2>
    </div>
  );
}

export default ItemListContainer;