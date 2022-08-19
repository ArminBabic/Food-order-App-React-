import { useRef, useState } from "react";

import style from "./Checkout.module.css";

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const isEmpty = (value) => value.trim() === "";
  const isFive = (value) => value.trim().length === 5;

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const streeIsValid = !isEmpty(enteredStreet);

    const cityIsValid = !isEmpty(enteredCity);
    const postalIsValid = isFive(enteredPostalCode);

    setFormInputsValidity({
      name: nameIsValid,
      street: streeIsValid,
      city: cityIsValid,
      postalCode: postalIsValid,
    });

    const formIsValid =
      nameIsValid && streeIsValid && cityIsValid && postalIsValid;

    if (!formIsValid) {
      return;
    } else {
      props.onSubmit({
        name: enteredName,
        street: enteredStreet,
        city: enteredCity,
        postalCode: enteredPostalCode,
      });
    }
  };
  return (
    <form onSubmit={confirmHandler}>
      <div
        className={`${style.control} ${
          !formInputsValidity.name ? style.invalid : ""
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name.</p>}
      </div>
      <div
        className={`${style.control} ${
          !formInputsValidity.street ? style.invalid : ""
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid street.</p>}
      </div>
      <div
        className={`${style.control} ${
          !formInputsValidity.postalCode ? style.invalid : ""
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputsValidity.postalCode && (
          <p>Please enter a valid postal code(5 characters long).</p>
        )}
      </div>
      <div
        className={`${style.control} ${
          !formInputsValidity.city ? style.invalid : ""
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid city.</p>}
      </div>
      <div className={style.actions}>
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
