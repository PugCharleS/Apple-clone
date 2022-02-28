import React, { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { formatter } from "../Formatter/Formatter";
import { Link } from "react-router-dom";
import {
  addDoc,
  collection,
  documentId,
  getDocs,
  getFirestore,
  query,
  writeBatch,
  where,
  Timestamp,
} from "firebase/firestore";
import Order from "../Order/Order";
import CartForm  from "./CartForm/CartForm";

import "./Cart.css";
import CartItems from "./CartItems/CartItems";

const Cart = () => {
  const { emptyCart, cartList, total } = useContext(CartContext);
  const [idOrder, setIdOrder] = useState("");
  const [flag, setFlag] = useState(false);
  const [dataForm, setDataForm] = useState({
    email: "",
    name: "",
    phone: "",
  });

  const makePurchase = async (e) => {
    e.preventDefault();
    
    let order = {};

    order.date = Timestamp.fromDate(new Date())
    order.buyer = dataForm;
    order.total = total();

    order.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const name = cartItem.name;
      const price = cartItem.price;
      const quantity = cartItem.quantity;

      return { id, name, price, quantity };
    });

    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    await addDoc(orderCollection, order)
      .then((resp) => setIdOrder(resp.id))
      .catch((err) => console.log(err));

    const queryCollection = collection(db, "items");

    const queryUpdateStock = query(
      queryCollection,
      where(
        documentId(),
        "in",
        cartList.map((it) => it.id)
      )
    );

    const batch = writeBatch(db);

    await getDocs(queryUpdateStock)
      .then((resp) =>
        resp.docs.forEach((res) =>
          batch.update(res.ref, {
            stock:
              res.data().stock -
              cartList.find((item) => item.id === res.id).quantity,
          })
        )
      )
      .catch((err) => console.log(err));

    batch.commit();
    emptyCart();
    setFlag(!flag);
  };

    const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="contenedor-bolsa">
      <>
        {flag ? 
          <Order idOrder={idOrder} dataForm={dataForm}/>
          : 
          cartList.length >= 1 ? 
          <div className="bolsa">
            <div className="bolsa-info" id="bolsa">
              <h1>
                Tu bolsa contiene lo siguiente <br />
                {formatter.format(total())}
              </h1>
              <p>Obtén envío y devoluciones gratuitos en todos los pedidos.</p>
              <CartForm handleChange={handleChange} dataForm={dataForm} makePurchase={makePurchase}/>
            </div>
            <hr />
            <CartItems cartList={cartList}/>
          </div>
          : 
          <div className="bolsa">
            <div className="bolsa-info">
              <h1>Tu bolsa est&aacute; vac&iacute;a</h1>
            </div>
          </div>
        }
      </>
      {cartList.length >= 1 ? 
        <button id="empty" className="empty-cart" onClick={emptyCart}>
          Vaciar Carrito
        </button>
        : 
        <Link to={"/"}>
          <button className="empty-cart">Ir al Home</button>
        </Link>
      }
    </div>
  );
};


export default Cart;
    
