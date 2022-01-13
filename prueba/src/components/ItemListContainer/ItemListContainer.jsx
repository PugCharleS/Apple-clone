import { useState, useEffect } from 'react';
import { getFetch } from '../../helpers/mock';
import ItemList from './ItemList/ItemList';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';

import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {

  const [products, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategoria } = useParams();

  useEffect(() => {
    if (idCategoria) {
      getFetch
      .then(resp => setProductos(resp.filter(prod => prod.categoria === idCategoria)))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
    } else {
      getFetch
      .then(resp => setProductos(resp))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
    }
  }, [idCategoria]);

  // console.log(idCategoria);

  return(
    <div>
      <h2 className='greeting'>{greeting}</h2>
      <div className='menu'>
        {
          loading ? <Loader /> 
            : 
          <ItemList products={products} />
        }
      </div>
    </div>
  );
}

export default ItemListContainer;