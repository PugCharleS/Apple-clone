
const ItemDetail = ({ producto }) => {

  const { id, nombre, precio, categoria, img, cantidad } = producto;

  return (
    <div>
      <h3>Detalle</h3>
      <h4>{nombre}</h4>
      <img src={img} alt={nombre} style={{width: '400px'}} />
    </div>
  )
}

export default ItemDetail;
