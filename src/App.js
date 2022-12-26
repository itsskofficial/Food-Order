import { Fragment } from "react"
import Cart from "./components/Cart/Cart"
import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals"

const App = () => {
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
