import { useContext, useState } from "react"
import CartContext from "../../store/cart-context"
import CartIcon from "../Cart/CartIcon"
import Button from "../UI/Button"
import classes from "./css/HeaderCartButton.module.css"

const HeaderCartButton = (props) => {
    const [animateBtn,setanimateBtn] = useState(false)
    const cartCtx = useContext(CartContext)

    const cartItems = cartCtx.items.reduce((current, item) => {
        return current + item.amount
    }, 0)
    
    const 
    return (
        <Button className={classes.button} onClick = {props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                {cartItems}  
            </span>
        </Button>
    )
}

export default HeaderCartButton