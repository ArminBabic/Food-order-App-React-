import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartShown, setCartShown] = useState(false);

  const cartShownHandler = () => {
    setCartShown(true);
  };

  const cartHideHandler = () => {
    setCartShown(false);
  };

  return (
    <React.Fragment>
      {cartShown && <Cart onClose={cartHideHandler} />}
      <Header onShowCart={cartShownHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
