import { useEffect, useState } from "react";

import Card from "../UI/Card";
import classes from "./css/AvailableMeals.module.css"
import MealItem from "./MealItem/MealItem";


const AvailableMeals = () => {
  const [meals, setMeals] = useState([])
  
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://food-order-a9206-default-rtdb.firebaseio.com/meals.json')
      const data = response.json()
      
      const loadedMeals = []

      for (const key in data) {
        loadedMeals.push({
          id:key,
          name:data[key].name,
          description:data[key].description,
          price:data[key].price,
        })
      }
      setMeals(loadedMeals)
    }
    fetchMeals()
  }, [meals])
  
  const mealsList = DUMMY_MEALS.map(meal => <MealItem key={meal.id} id={meal.id} name={meal.name} description ={meal.description} price={meal.price}/>)
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals