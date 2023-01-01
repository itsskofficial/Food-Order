import { Fragment, useContext } from "react"
import CartContext from "../../../store/cart-context"
import classes from "./css/MealItem.module.css"
import MealItemForm from "./MealItemForm"

const MealItem = (props) => {
    const cartCtx = useContext(CartContext)
    const price = `$ ${props.price.toFixed(2)}`
    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            
        })
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
            <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
        </Fragment>
    )
}

export default MealItem