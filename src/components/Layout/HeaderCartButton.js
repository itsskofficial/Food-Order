import { useContext } from "react"
import CartContext from "../../store/cart-context"
import CartIcon from "../Cart/CartIcon"
import Button from "../UI/Button"
import classes from "./css/HeaderCartButton.module.css"

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext)

    const cartItems = cartCtx.items.reduce((current, amo==) = > {
        
    },0)
    return (
        <Button className={classes.button} onClick = {props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                3    
            </span>
        </Button>
    )
}

export default HeaderCartButton