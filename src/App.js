import { Fragment, useState } from "react"
import Cart from "./components/Cart/Cart"
import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals"

const App = () => {

  const [cartIsShown,setCartIsShown] = useState(false)

  const showCardHandler = () => {
    setCartIsShown(true)
  }

  const hideCardHandler = () => {
    setCartIsShown(false)
  }

  return (
    <Fragment>
      {cartIsShown && <Cart onClose= {hideCardHandler} />}
        <Header onShowCart = {showCardHandler}>
          <main>
            <Meals/>
          </main>
        </Header>
    </Fragment>
  )
}

export default App
