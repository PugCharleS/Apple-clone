import { useState, useEffect } from 'react';
import { getFetch } from '../../helpers/mock';
import ItemList from './ItemList/ItemList';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';

import './ItemListContainer.css'

const ItemListContainer = () => {

  const [products, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getFetch
      .then(resp => setProductos(resp.filter(prod => prod.category === id)))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
    } else {
      getFetch
      .then(resp => setProductos(resp))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
    }
  }, [id]);

  return(
    <div className='container'>
        {
          loading ? <Loader /> 
            : 
          <>
            <ItemList products={products}/>
          </>
        }
    </div>
  );
}

export default ItemListContainer;