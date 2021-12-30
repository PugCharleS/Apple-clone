import React, { useState, useEffect } from 'react';
import { getFetch } from '../../mock';
import Item from '../Item/Item';
import Loader from '../Loader/Loader';
 
const ItemList = () => {
  
  const [products, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch
    .then(resp => setProductos(resp))
    .catch(err => console.log(err))
    .finally(() => setLoading(false));
  }, ([]));

  console.log(products);

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