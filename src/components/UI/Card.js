import './css/Card.css'
import classes from "./css/Card.module.css"

const Card = (props) => {
    return (
        <div className={'card ' + props.className}>
            {props.children}
        </div>
    )
}

export default Card