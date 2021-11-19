import React from "react"
import "./Navbar.css"
import 'bootstrap/dist/css/bootstrap.css';
import { useHistory } from "react-router";
const Navbar = () => {
    const history= useHistory();
    const handleCont=()=>{
        history.push('./Contact')
    }
    const handleHome=()=>{
        history.push('./')
    }
    const handleRegi=()=>{
        history.push('./register')
    }
    const handleAbout=()=>{
        history.push('./AboutUs')
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-col mb-4 bg-unique hm-gradient">
                <div className="container-fluid">
                    <strong><a className="navbar-brand" to="#">FREIGHT-CENTRAL</a></strong>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"data-target="#navbarSupprtedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 ">
                            <li className="nav-item">
                                <a className="nav-link" onClick={e=>handleHome()}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={e=>handleAbout()}>About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={e=>handleCont()}>Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"onClick={e=>handleRegi()}>SignUp</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;