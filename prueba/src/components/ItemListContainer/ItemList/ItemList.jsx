import React from 'react';
import Item from '../Item/Item';
import Loader from '../../Loader/Loader';

const ItemList = ({products, loading}) => {
  return(
    <div>
      { 
        loading ? <Loader /> 
          : 
        products.map( prod =>     
          <Item prod={prod} />
        )
      }
    </div>
  );
}

export default ItemList;

