import CartIcon from "../Cart/CartIcon"
import Button from "../UI/Button"
import classes from "./css/HeaderCartButton.module.css"

const HeaderCartButton = (props) => {
    return (
        <Button className={classes.button}>
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