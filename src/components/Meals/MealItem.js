import React from "react";
import style from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const listMeals = props.meals.map((meal) => {
    const price = meal.price.toFixed(2);
    return (
      <li key={meal.id} className={style.meal}>
        <div>
          <h3>{meal.name}</h3>
          <div>{meal.description}</div>
          <div>{price}</div>
        </div>
        <div>
          <MealItemForm />{" "}
        </div>
      </li>
    );
  });

  return <>{listMeals}</>;
};

export default MealItem;
