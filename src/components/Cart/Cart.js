import { useContext } from "react"
import CartContext from "../../store/cart-context"
import Button from "../UI/Button"
import Modal from "../UI/Modal"
import CartItem from "./CartItem"
import classes from "./css/Cart.module.css"

const Cart = (props) => {
    const cartCtx = useContext(CartContext)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const cartItems = <ul className={classes['cart-items']}>
        {cartCtx.items.map((item)=><li><CartItem</li>)}
    </ul>
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>
                    Total Amount
                </span>
                <span>
                    {totalAmount}
                </span>
            </div>
            <div className={classes.actions}>
                <Button className={classes['button-alt']} onClick = {props.onClose}>
                    Close
                </Button>
                {cartCtx.items.length > 0 &&
                    <Button className={classes.button}>
                        Order
                    </Button>}
                
            </div>
        </Modal>
        
    )
}

export default Cart