import classes from "./css/MealItemForm.module.css"
import Input from "../../UI/Input"

const MealItemForm = (props) => {
    return (
        <form className={classes.form}>
            <Input label="Amount" input={{
                id:'amount'
            }} />
            <Button type="submit">
                Add Item
            </Button>
        </form>
    )
}

export default MealItemForm