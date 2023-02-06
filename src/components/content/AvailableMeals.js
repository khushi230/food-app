import { useEffect, useState } from "react";

import Card from "../interface/Card";
import MealItem from "./MealItem";

import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = [
        {
          id: 1,
          name: "sushi",
          description:
            "a staple rice dish of Japanese cuisine, consisting of cooked rice flavoured with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold",
          price: 499,
        },
        {
          id: 2,
          name: "pizza",
          description:
            "dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly",
          price: 299,
        },
        {
          id: 2,
          name: "pasta",
          description:
            "Pasta is a type of food made from a mixture of flour, eggs, and water that is formed into different shapes and then boiled. ",
          price: 159,
        },
        {
          id: 2,
          name: "garlic bread",
          description:
            "Garlic bread (also called garlic toast) consists of bread (usually a baguette, sour dough, or bread such as ciabatta), topped with garlic and olive oil or butter and may include additional herbs, such as oregano or chives. It is then either grilled until toasted or baked in a conventional or bread oven.",
          price: 149,
        },
        {
          id: 2,
          name: "burger",
          description:
            "A burger is a flat round mass of minced meat or vegetables, which is fried and often eaten in a bread roll.",
          price: 209,
        },
      ];

      const loadedMeals = [];

      for (const key in response) {
        loadedMeals.push({
          id: key,
          name: response[key].name,
          description: response[key].description,
          price: response[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals();
  }, []);

  return (
    <>
      {isLoading ? (
        <section className={classes.mealsLoading}>
          <p>Loading...</p>
        </section>
      ) : (
        <section className={classes.meals}>
          <Card>
            <ul>
              {meals.map((meal) => (
                <MealItem
                  id={meal.id}
                  key={meal.id}
                  name={meal.name}
                  description={meal.description}
                  price={meal.price}
                />
              ))}
            </ul>
          </Card>
        </section>
      )}
    </>
  );
};

export default AvailableMeals;
