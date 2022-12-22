import 

const MealItem = (props) => {
    return (
        <li>
            <div>
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