import CartContext from "./cart-context"

const CartProvider = (props) => {
    addItemHandler = (item) => {}
    return (
        <CartContext.Provider>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider