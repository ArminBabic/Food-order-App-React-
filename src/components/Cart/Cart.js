import React, { useContext, useState } from "react";
import style from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const ctxCart = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const totalAmount = `$${ctxCart.totalAmount}`;
  const hasItems = ctxCart.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    ctxCart.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    ctxCart.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const modalButtons = (
    <div className={style.actions}>
      <button className={style["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={style.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const submitHandler = (userData) => {
    setIsSubmitting(true);
    fetch(
      "https://tasks-73f68-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: ctxCart.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    ctxCart.clearCart();
  };

  const cartItems = (
    <ul className={style["cart-items"]}>
      {ctxCart.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={style.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      {isCheckout && (
        <Checkout onSubmit={submitHandler} onClose={props.onClose} />
      )}

      {!isCheckout && modalButtons}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending user data...</p>;

  const didSubmitModalContent = (
    <React.Fragment>
      <p>Succesfully sent the order!</p>
      <div className={style.actions}>
        <button className={style.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
