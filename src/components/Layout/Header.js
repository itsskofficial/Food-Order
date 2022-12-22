import { Fragment } from "react"
import Button from "../UI/Button"

const Header = (props) => {
    return (
        <Fragment>
            <header>
                <h1>
                    Food Order
                </h1>
                <Button>
                    Cart
                </Button>
            </header>
            <div>
                <img alt="Food" src="../../assets/food.jpg"/>
            </div>

            

        </Fragment>
    )
}

export default Header
