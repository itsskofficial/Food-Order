import CartIcon from "../Cart/CartIcon"
import Button from "../UI/Button"

const HeaderCartButton = (props) => {
    return (
        <Button>
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