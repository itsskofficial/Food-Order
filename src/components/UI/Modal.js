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
                
            </div>
        </div>
    )
}

const Modal = (props) => {
    return (

    )
}

export default Modal