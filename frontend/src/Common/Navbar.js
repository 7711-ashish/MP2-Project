import React from "react"
import "./Navbar.css"
import 'bootstrap/dist/css/bootstrap.css';
import { useHistory } from "react-router";
const Navbar = () => {
    const history= useHistory();
    const handleCont=()=>{
        history.push('./Contact')
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-col mb-4 bg-unique hm-gradient">
                <div className="container-fluid">
                    <strong><a className="navbar-brand" to="#">FREIGTHCENTRAL</a></strong>
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse"data-target="#navbarSupprtedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-lg-2 mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link active" aria-current="page" to="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" to="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={e=>handleCont()}>Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#login">Signin/Up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;