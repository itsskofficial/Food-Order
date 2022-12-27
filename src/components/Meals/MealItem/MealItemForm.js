import classes from "./css/MealItemForm.module.css"
import Input from "../../UI/Input"
import Button from "../../UI/Button"

const MealItemForm = (props) => {
    const submit

    return (
        <form className={classes.form}>
            <Input label="Amount" input={{
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