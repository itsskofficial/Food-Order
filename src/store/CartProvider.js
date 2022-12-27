import CartContext from "./cart-context"

const CartProvider = (props) => {
    addItemHandler = (item) => {}
    const removeItemHandler = (id) => {}
    return (
        <CartContext.Provider>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider