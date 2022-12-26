import classes from "./css/Input.module.css"

const Input = (props) => {
    return (
        <div className={classes.input}>
            <label htmlFor={classes.input.id}>
                {props.label}
            </label>
            <input {...props.input}/>
        </div>
    )
}

export default Input