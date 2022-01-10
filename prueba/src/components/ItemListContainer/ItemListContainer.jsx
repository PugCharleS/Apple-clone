import React, { useState, useEffect } from 'react';
import { getFetch } from '../../mock';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'

const ItemListContainer = (props) => {

  const [products, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch
    .then(resp => setProductos(resp))
    .catch(err => console.log(err))
    .finally(() => setLoading(false));
  }, ([]));
  
  const { greeting } =  props;

  return(
    <div>
      <h2 className='greeting'>{greeting}</h2>
      <div className='menu'>
        <ItemList products={products} loading={loading} />
      </div>

    </div>
  );
}

export default ItemListContainer;