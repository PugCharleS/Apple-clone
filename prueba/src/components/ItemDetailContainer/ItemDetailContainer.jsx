import { getDoc, getFirestore, doc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

  const [product, setProducto] = useState({});

  const {id} = useParams();

  useEffect(() => {
    const db = getFirestore()
    const queryProd = doc(db, 'items', id);
    getDoc(queryProd)
      .then(resp => setProducto({id: resp.id, ...resp.data()}));
  }, [id]);

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer;