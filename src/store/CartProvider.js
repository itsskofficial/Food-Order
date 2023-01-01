import CartContext from "./cart-context"
import { useReducer } from "react"

const defaultCartState = {
    items: [],
    totalAmount: 0
}
    
const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const existingItemIndex = state.items.findIndex(item => item.id === action.item.id)
        const existingItem = state.items[existingItemIndex]

        let updatedItem
        let updatedItems
        const updatedItems = state.items.concat(action.item)
        const updatedTotalAmount = state.totalAmount + state.item.price * state.item.amount
        return ({
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
        )
    }
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