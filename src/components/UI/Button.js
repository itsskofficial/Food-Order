import classes from "./css/Button.module.css"

const Button = (props) => {
    return (
        <button onClick={props.onClick} type={props.type} className={classes.button}>
            {props.children}
        </button>
    )
}

export default Button