import React, { useRef, useState } from "react";
import style from "./MealItemForm.module.css";
import Input from "../UI/Input";

const MealItemForm = (props) => {
  const refInputAmount = useRef("");
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = refInputAmount.current.value;

    const enteredAmountNumber = parseInt(enteredAmount);

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={style.form} onSubmit={submitHandler}>
      <Input
        ref={refInputAmount}
        label={`Amount ${props.id}`}
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!amountIsValid && <p>Please enter a valid amount(1-5)</p>}
    </form>
  );
};

export default MealItemForm;
