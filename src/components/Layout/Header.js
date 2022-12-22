import { Fragment } from "react"
import Button from "../UI/Button"
import foodImage from "../../assets/food.jpg"

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
                <img alt="Food" src=/>
            </div>

            

        </Fragment>
    )
}

export default Header
