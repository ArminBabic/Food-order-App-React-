import CartIcon from "./CartIcon";
import style from "./HeaderButton.module.css";
import { useContext, useState, useEffect } from "react";
import CartContext from "../../store/cart-context";
const HeaderButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnIsHighlited, setBtnIsHighlited] = useState(false);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  const btnClasses = `${style.button} ${btnIsHighlited ? style.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlited(true);

    const timer = setTimeout(() => {
      setBtnIsHighlited(false);
    }, 300);

    return () => {};
  }, [items]);

  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className={style.icon}>
        <CartIcon />
      </span>

      <span>Your Cart</span>

      <span className={style.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderButton;
