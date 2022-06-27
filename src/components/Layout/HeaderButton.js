import CartIcon from "./CartIcon";
import style from "./HeaderButton.module.css";

const HeaderButton = (props) => {
  return (
    <button className={style.button}>
      <span className={style.icon}>
        <CartIcon />
      </span>

      <span>Your Cart</span>

      <span className={style.badge}>3</span>
    </button>
  );
};

export default HeaderButton;
