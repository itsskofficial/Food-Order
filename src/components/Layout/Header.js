import { Fragment } from "react"

const Header = (props) => {
    return (
        <Fragment>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img alt= "navbar-logo-img" src="../../public/assets/logo.png" className="navbar-logo-img"></img>
                </div>
            </div>
        </Fragment>
    )
}

export default Header
