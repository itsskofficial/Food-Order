import { useRef } from "react"
import classes from "./css/MealItemForm.module.css"
import Input from "../../UI/Input"
import Button from "../../UI/Button"

const MealItemForm = (props) => {
    const amountInputRef = useRef()
    const submitEventHandler = (event) => {
        event.preventDefault()
        const enteredAmount = amountInputRef.current.value
        const enteredAmountNumber = +enteredAmount
    }

    return (
        <form className={classes.form} onSubmit={submitEventHandler}>
            <Input ref={amountInputRef} label="Amount" input={{
                id: 'amount-' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                defaultValue: '1'
            }} />
            <Button type="submit">
                Add Item
            </Button>
        </form>
    )
}

export default MealItemForm