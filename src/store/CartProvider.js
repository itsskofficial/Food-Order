import CartContext from "./cart-context"

const CartProvider = (props) => {
    return (
        <CartContext.Provider>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider