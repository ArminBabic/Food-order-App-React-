import React from "react";
import style from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className={style["cart-items"]}>
      {[{ id: "1", name: "food", amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={style.total}>
        <span>Total Amount</span>
        <span>35.66</span>
      </div>
      <div className={style.actions}>
        <button className={style["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={style.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
