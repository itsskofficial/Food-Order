import CartContext from "./cart-context"
import { useReducer } from "react"

const defaultCartState = {
    items: [],
    totalAmount: 0
}
    
const cartReducer = (state, action) => {
    if (action.type=='ADD'){
        const updatedItems = state.items.concat(action.item)
        const updatedTotalAmount = state.totalAmount + state.item.price * state.item.amount
    }
    return ({
        items:updatedItems,
        totalAmount:upda
    }
    )
}

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
    const addItemHandler = (item) => {
        dispatchCartAction({type:'ADD', item: item})
    }
    const removeItemHandler = (id) => {
        dispatchCartAction({type: 'REMOVE' , id: id})
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