import { useEffect } from "react";

import Card from "../UI/Card";
import classes from "./css/AvailableMeals.module.css"
import MealItem from "./MealItem/MealItem";


const AvailableMeals = () => {
  useEffect(() => {
    
  },[])
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