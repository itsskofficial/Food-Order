import classes from "./css/Modal.module.css"
import {Fragment} from "react"

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop}/>
    )
}

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}

const Modal = (props) => {
    return (
        <Fragment>
            {}
            <Backdrop/>
            <ModalOverlay/>
        </Fragment>
    )
}

export default Modal