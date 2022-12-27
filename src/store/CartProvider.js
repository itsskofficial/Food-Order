import CartContext from "./cart-context"
import { useReducer } from "react"

const defaultCartState = {
    items: [],
    totalAmount: 0
}
    
const cartReducer = (state, action) => {
    return defaultCartState
}

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
    const addItemHandler = (item) => {
        dispatchCartAction({type:'ADD', item: item})
    }
    const removeItemHandler = (id) => {
        dispatchCartAction({type: 'REMOVE' })
    }
    
    const cartContext = ({
        items: [],
        totalAmount: 0,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    })

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider