import './css/Card.css'
import classes from "./css/"

const Card = (props) => {
    return (
        <div className={'card ' + props.className}>
            {props.children}
        </div>
    )
}

export default Card