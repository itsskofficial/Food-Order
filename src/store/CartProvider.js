import CartContext from "./cart-context"

const CartProvider = (props) => {
    const addItemHandler = (item) => {}
    const removeItemHandler = (id) => {}
    
    const cartContext = 
    return (
        <CartContext.Provider>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider