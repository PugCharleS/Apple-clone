import React from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
 
const ItemListContainer = (props) => {
  
  const { greeting } =  props;

  return(
    <div>
      <h2 className='greeting'>{greeting}</h2>
      <div className='menu'>
        <ItemList />
      </div>

    </div>
  );
}

export default ItemListContainer;