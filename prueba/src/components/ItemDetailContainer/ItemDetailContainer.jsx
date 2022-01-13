import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from '../../helpers/mock';
import ItemDetail from "./ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({});

  const {idDetalle} = useParams();

  useEffect(() => {
      getFetch
     .then(resp => setProducto(resp.find( prod => prod.id === idDetalle)))
  }, [idDetalle]);

  return (
    <div>
       <ItemDetail producto={producto} />
    </div>
  )
}

export default ItemDetailContainer;
