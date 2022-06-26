import React from "react";
import style from "./Header.module.css";
import images from "../../images/meals.jpg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={style.header}>
        <h1>Meals</h1>
        <button>Cart</button>
      </header>
      <div className={style["main-image"]}>
        <img src={images} alt="table of food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
