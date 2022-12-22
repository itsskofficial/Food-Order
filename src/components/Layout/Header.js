import { Fragment } from "react"
import Button from "../UI/Button"
import foodImage from "../../assets/food.jpg"
import classes from './css/Header.module.css'

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>
                    Food Order
                </h1>
                <Button >
                    Cart
                </Button>
            </header>
            <div className={classes.mainImage}>
                <img alt="Food" src={foodImage} />
            </div>

            

        </Fragment>
    )
}

export default Header
