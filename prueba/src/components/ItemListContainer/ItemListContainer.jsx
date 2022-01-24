import { useState, useEffect } from 'react';
import { getFetch } from '../../helpers/mock';
import ItemList from './ItemList/ItemList';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';
// import { collection, getDocs, getFirestore, query, where} from "firebase/firestore";

import './ItemListContainer.css'

const ItemListContainer = () => {

  const [products, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    // const db = getFirestore();
    // if (id) {
    //   const queryCollection = query( collection( db, 'items' ), where('category', '==', id) );
    //   getDocs(queryCollection)
    //   .then(res => setProductos( res.docs.map( prod => ( { id: prod.id, ...prod.data() } ))))
    //   .catch(err => err)
    //   .finally(() => setLoading(false))
    // } else {
    //   const queryCollection = query( collection( db, 'items' ));
    //   getDocs(queryCollection)
    //   .then(res => setProductos( res.docs.map( prod => ( { id: prod.id, ...prod.data() } ))))
    //   .catch(err => err)
    //   .finally(() => setLoading(false))
    // }
  

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