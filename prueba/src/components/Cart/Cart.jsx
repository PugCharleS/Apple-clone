import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/cartContext';
import CartItem from './CartItem/CartItem';
import { formatter } from '../Formatter/Formatter'; 
import { Link } from 'react-router-dom';
import { addDoc, collection, documentId, getDocs, getFirestore, query, writeBatch, where } from "firebase/firestore";
import Order from '../Order/Order';
import './Cart.css';

function Cart() {
  
  const { emptyCart, cartList, total } = useContext(CartContext);
  const [idOrder, setIdOrder] = useState('');
  const [flag, setFlag] = useState(false)
  const [dataForm, setDataForm] = useState({
    email: '',
    name: '',
    phone: ''
  });
  
  const makePurchase = async (e) => {
    e.preventDefault()

    let order = {}

    order.buyer = dataForm
    order.total = total();

    order.items = cartList.map(cartItem => {
      const id = cartItem.id;
      const name = cartItem.name;
      const price = cartItem.price;
      const quantity = cartItem.quantity;

      return {id, name, price, quantity}
    })

    const db = getFirestore()
    const orderCollection = collection(db, 'orders')
    await addDoc(orderCollection, order)
      .then(resp => setIdOrder(resp.id))
      .catch(err => console.log(err))

    const queryCollection = collection(db, 'items')

    const queryUpdateStock = query(
      queryCollection, where( documentId(), 'in', cartList.map(it => it.id))
    )

    const batch = writeBatch(db)

    await getDocs(queryUpdateStock)
      .then(resp => 
        resp.docs.forEach(res => 
          batch.update(res.ref, {
            stock: res.data().stock - cartList.find(item => item.id === res.id).quantity
          })
        ))
      .catch(err => console.log(err))

      batch.commit();
      emptyCart()
      setFlag(true);
  }

  function handleChange(e) {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='contenedor-bolsa'>
      <>
        {
          flag ?
            <Order idOrder={idOrder}/>
            :
            (cartList.length >= 1) ?
              <div className="bolsa">
                <div className="bolsa-info" id='bolsa'>
                  <h1>Tu bolsa contiene lo siguiente 
                    {
                      formatter.format(total())
                    }
                  </h1>
                  <p>Obtén envío y devoluciones gratuitos en todos los pedidos.</p>
                  <form className='bolsa-info-form' onSubmit={makePurchase}>
                    <input type="text" name="name" placeholder="name" onChange={handleChange} value={dataForm.name} />
                    <br />
                    <input type="text" name="phone" placeholder="phone" onChange={handleChange} value={dataForm.phone} />
                    <br />
                    <input type="email" name="email" placeholder="email" onChange={handleChange} value={dataForm.email} />
                    <br />
                    <button className='bolsa-info-button'>Pagar</button>
                  </form>
                </div>

                <hr />

                <div className="bolsa-products">
                  { cartList.map(prod => <CartItem key={prod.id} prod={prod}/>) }
                </div>
              </div>
                :
              <div className="bolsa">
                <div className="bolsa-info">
                  <h1>Tu bolsa est&aacute; vac&iacute;a</h1>
                </div>
              </div>
        }
      </>
      {
        (cartList.length >= 1 ) ?
          <button id='empty' className='empty-cart' onClick={emptyCart}>Vaciar Carrito</button>
            :
          <Link to={'/'}><button className='empty-cart'>Ir al Home</button></Link>
      }
    </div>
  )
}

export default Cart;
