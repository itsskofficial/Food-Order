import CartIcon from "../Cart/CartIcon"
import Button from "../UI/Button"
import classes from "./"

const HeaderCartButton = (props) => {
    return (
        <Button className={classes.button}>
            <span>
                <CartIcon/>
            </span>
            <span>
                Your Cart
            </span>
            <span>
                3    
            </span>
        </Button>
    )
}

export default HeaderCartButton