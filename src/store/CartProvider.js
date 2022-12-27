import CartContext from "./cart-context"

const CartProvider = (props) => {
    const addItemHandler = (item) => {}
    const removeItemHandler = (id) => {}
    
    const cartContext = ({
        items: [],
        totalAmount: 0,
        addItem: add
    })
    return (
        <CartContext.Provider>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider