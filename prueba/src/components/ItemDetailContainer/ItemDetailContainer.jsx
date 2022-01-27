import { getDoc, getFirestore, doc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { getFetch } from '../../helpers/mock';
import ItemDetail from "./ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({});

  const {id} = useParams();

  useEffect(() => {
    const db = getFirestore()
    const queryProd = doc(db, 'items', id);
    getDoc(queryProd)
      .then(resp => setProducto({id: resp.id, ...resp.data()}));
  }, [id]);

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  )
}

export default ItemDetailContainer;

  // getFetch
  // .then(resp => setProducto(resp.find( prod => prod.id === id)))