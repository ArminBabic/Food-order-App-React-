import React from "react";
import style from "./MealItemForm.module.css";
import Input from "../UI/Input";

const MealItemForm = (props) => {
  return (
    <form className={style.form}>
      <Input
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
    </form>
  );
};

export default MealItemForm;
