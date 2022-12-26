import { Fragment } from "react"
import foodImage from "../../assets/food.jpg"
import classes from './css/Header.module.css'
import HeaderCartButton from "./HeaderCartButton"

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>
                    Food Order
                </h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes["main-image"]}>
                <img alt="Food" src={foodImage} />
            </div>
        </Fragment>
    )
}

export default Header
