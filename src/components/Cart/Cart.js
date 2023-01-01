import { useContext } from "react"
import CartContext from "../../store/cart-context"
import Button from "../UI/Button"
import Modal from "../UI/Modal"
import classes from "./css/Cart.module.css"

const Cart = (props) => {
    const cartCtx = useContext(CartContext)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const cartItems = <ul className={classes['cart-items']}>
        {cartCtx.items.map((item)=><li>{item.name}</li>)}
    </ul>
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>
                    Total Amount
                </span>
                <span>
                    $12.22
                </span>
            </div>
            <div className={classes.actions}>
                <Button className={classes['button-alt']} onClick = {props.onClose}>
                    Close
                </Button>
                <Button className={classes.button}>
                    Order
                </Button>
            </div>
        </Modal>
        
    )
}

export default Cart