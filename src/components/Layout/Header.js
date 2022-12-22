import { Fragment } from "react"
import Button from "../UI/Button"
import foodImage from "../../assets/food.jpg"
import classes from './css/'

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
                <img alt="Food" src={foodImage} />
            </div>

            

        </Fragment>
    )
}

export default Header
