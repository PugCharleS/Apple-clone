import { getDoc, getFirestore, doc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import ItemDetail from "./ItemDetail/ItemDetail";

import './ItemDetail/ItemDetail.css'

const ItemDetailContainer = () => {

  const [product, setProducto] = useState({});
  const [loading, setLoading] = useState(true);

  const {id} = useParams();

  useEffect(() => {
    const db = getFirestore()
    const queryProd = doc(db, 'items', id);
    getDoc(queryProd)
      .then(resp => setProducto({id: resp.id, ...resp.data()}))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      {
        loading ?
          <Loader />
          :
          <ItemDetail product={product} />      
      }
      </div>
  )
}

export default ItemDetailContainer;