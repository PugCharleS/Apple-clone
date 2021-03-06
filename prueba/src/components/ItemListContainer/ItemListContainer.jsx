import { useState, useEffect } from 'react';
// import { getFetch } from '../../helpers/mock';
import ItemList from './ItemList/ItemList';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where} from "firebase/firestore";

const ItemListContainer = () => {

  const [products, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true)
    const db = getFirestore();
    const queryCollection = collection(db, 'items');
    const queryFilterGet = id ? query(queryCollection, where('category', '==', id)) : queryCollection

    getDocs(queryFilterGet)
      .then(res => setProductos(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
      .catch(err => err)
      .finally(() => setLoading(false));
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