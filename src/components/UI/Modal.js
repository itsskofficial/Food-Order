import classes from "./css/Modal.module.css"
import {Fragment, ReactDOM} from "react"

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
            {ReactDOM.createPortal(<Backdrop/>, findElementById('backdrops'))}
            <Backdrop/>
            <ModalOverlay/>
        </Fragment>
    )
}

export default Modal