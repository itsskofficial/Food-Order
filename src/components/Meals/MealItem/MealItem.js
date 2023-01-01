import { Fragment } from "react"
import classes from "./css/MealItem.module.css"
import MealItemForm from "./MealItemForm"

const MealItem = (props) => {
    const price = `$ ${props.price.toFixed(2)}`
    const addToCartHandler = (amount) => {

    }
    return (
        <Fragment>
            <li>
                <div className={classes.meal}>
                    <h3>
                        {props.name}
                    </h3>
                    <div className={classes.description}>
                        {props.description}
                    </div>
                    <div className={classes.price}>
                        {price}
                    </div>
                </div>
            </li>
            <MealItemForm id={props.id} on/>
        </Fragment>
    )
}

export default MealItem