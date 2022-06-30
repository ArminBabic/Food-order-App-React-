import CartIcon from "./CartIcon";
import style from "./HeaderButton.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
const HeaderButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);
  return (
    <button onClick={props.onClick} className={style.button}>
      <span className={style.icon}>
        <CartIcon />
      </span>

      <span>Your Cart</span>

      <span className={style.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderButton;
