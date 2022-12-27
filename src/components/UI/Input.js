import React from "react"
import classes from "./css/Input.module.css"

const Input = React.forwardRef((props) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>
                {props.label}
            </label>
            <input {...props.input}/>
        </div>
    )
})

export default Input