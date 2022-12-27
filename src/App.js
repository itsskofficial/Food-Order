import { Fragment, useState } from "react"
import Cart from "./components/Cart/Cart"
import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals"
import CartProvider from "./store/CartProvider"

const App = () => {

  const [cartIsShown,setCartIsShown] = useState(false)

  const showCardHandler = () => {
    setCartIsShown(true)
  }

  const hideCardHandler = () => {
    setCartIsShown(false)
  }

  return (
    
    <CartProvider>

    </CartProvider>
      
    </Fragment>
  )
}

export default App
