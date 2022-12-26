import classes from "./css/Modal.module.css"

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop}/>
    )
}

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal-overlay}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}

const Modal = (props) => {
    return (
        <Backdrop/>
        <ModalOverlay/>
    )
}

export default Modal