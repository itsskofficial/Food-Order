import classes from "./css/MealItemForm.js"

const MealItemForm = (props) => {
    return (
        <form className={classes.form}>
            <Input>

            </Input>
            <Button type="submit">
                Add Item
            </Button>
        </form>
    )
}

export default MealItemForm