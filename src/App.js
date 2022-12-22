import { Fragment } from "react"
import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals"

const App = () => {
  return (
    <Fragment>
      <Header>
        <main>
          <Meals/>
        </main>
      </Header>
    </Fragment>
  )
}

export default App
