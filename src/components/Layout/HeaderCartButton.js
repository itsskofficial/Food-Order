import { useContext, useEffect, useState } from "react"
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
    
    const btnClasses = `${classes.button} ${animateBtn && classes.bump}`
    useEffect(() => {
        if (cartCtx.items.length===0){
            return
        }
        setanimateBtn(true)

        const timer = setTimeout(() => {
            setanimateBtn(false)
        },300)

        return () => {
            clearTimeout(timer)
        }
    }, [cartCtx.items])
    
    return (
        <Button className={btnClasses} onClick = {props.onClick}>
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