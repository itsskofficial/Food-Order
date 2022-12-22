import classes from "./css/MealItem.module.css"

const MealItem = (props) => {
    return (
        <li>
            <div className={classes.meal}>
                <h3>
                    {props.name}
                </h3>
                <div>
                    {props.description}
                </div>
                <div>
                    {price}
                </div>
            </div>
        </li>
    )
}