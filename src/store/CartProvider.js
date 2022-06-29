import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemHandler = (item) => {};
  const removeItemHandler = (id) => {};

  const cartContextHelper = {
    items: [],
    amount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContextHelper}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
