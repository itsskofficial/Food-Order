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
        if (existingItem) {
            updatedItem = {
                ...existingItem,
                amount: existingItem.amount + action.item.amount
            }
            updatedItems = [...state.items]
            updatedItems[existingItemIndex] = updatedItem
        }
        
        else {
            updatedItem = { ...action.item }
            updatedItems = state.items.concat(updatedItem)
        }
        
        const updatedTotalAmount = state.totalAmount + state.item.price * state.item.amount
        return ({
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
        )
    }
    
    if (action.type === 'REMOVE') {
        const existingItemIndex = state.items.findIndex(item => item.id === action.id)
        const existingItem = state.items[existingItemIndex]
        const updatedTotalAmount = state.totalAmount - existingItem.price
        let updatedItems
        let updatedItem
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)
        }
        else {
            updatedItem = { ...existingItem, amount: existingItem.amount - 1 }
            updatedItems = [...state.items]
            updatedItems[existingItemIndex]=updatedItem
        }
        return ({
            items: updatedItems,
            totalAmount:updatedTotalAmount
        })
    }
    return 
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
        items: cartState.items,
        totalAmount: cartState.totalAmount,
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