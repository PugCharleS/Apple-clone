import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from '../../helpers/mock';
import ItemDetail from "./ItemDetail/ItemDetail";
// import { collection, getDocs, getFirestore, query, where} from "firebase/firestore";

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({});

  const {id} = useParams();

  useEffect(() => {
    // const db = getFirestore();
    // const queryCollection = query( collection( db, id), where ("id", "==", id));
    // getDocs(queryCollection)
    // .then(res => setProducto( res.map( ( { id, producto } ))))
    // .catch(err => err)

    getFetch
    .then(resp => setProducto(resp.find( prod => prod.id === id)))
  }, [id]);

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  )
}

export default ItemDetailContainer;
