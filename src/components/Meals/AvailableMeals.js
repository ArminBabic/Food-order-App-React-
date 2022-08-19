import React, { useEffect, useState } from "react";
import style from "./AvailableMeals.module.css";
import Card from "../UI/Card";

import MealItem from "./MealItem";

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://tasks-73f68-default-rtdb.europe-west1.firebasedatabase.app/Meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          price: responseData[key].price,
          description: responseData[key].description,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
      console.log(httpError);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={style.loading}>
        <h1>Loading meals...</h1>;
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={style.error}>
        <h1>{httpError}</h1>;
      </section>
    );
  }

  const meal_list = meals.map((item) => {
    return (
      <MealItem
        key={item.id}
        id={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
      />
    );
  });

  return (
    <section className={style.meals}>
      {isLoading && <p>Loading meals...</p>}
      <Card>
        <ul>{meal_list}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
