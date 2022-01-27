import Item from '../Item/Item'
import './ItemList.css'
import { memo } from 'react'

const ItemList = memo (({products}) => {
  return(
      <div className='list-container'>
        { products.map( prod => <Item key={prod.id} prod={prod} /> ) }
      </div>
    )
}, (oldProps, newProps) => oldProps.products.lenght === newProps.products.lenght)

export default ItemList;