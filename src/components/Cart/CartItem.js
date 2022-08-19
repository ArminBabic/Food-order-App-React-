import style from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `$${props.price}`;

  return (
    <li className={style["cart-item"]}>
      <div>
        <h4>{props.name}</h4>
        <div className={style.summary}>
          <span className={style.price}>{price}</span>
          <span className={style.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={style.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
