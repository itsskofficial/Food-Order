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
      <Cart>
        <Header>
          <main>
            <Meals/>
          </main>
        </Header>
      </Cart>
    </Fragment>
  )
}

export default App
