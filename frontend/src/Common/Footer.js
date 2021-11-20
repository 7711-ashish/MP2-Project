import React from "react";
import { useHistory } from "react-router-dom";
import "./Footer.css"
import 'bootstrap/dist/css/bootstrap.css';
const Footer = () => {
    let history = useHistory();
    const handleAbout = (e) => {
        e.preventDefault();
        history.push('/Contact')
    }
    const handleContact = (e) => {
        e.preventDefault();
        history.push('/Contact')
    }
    const handleRegi = (e) => {
        e.preventDefault();
        history.push('/register')
    }
    return (
        <>
        <footer className="page-footer font-small blue pt-4">

            <div className="container-fluid text-center text-md-left">

                <div className="row">

                    <div className="col-md-6 mt-md-0 mt-3">

                        <h5 className="text-uppercase">CENTRAL TRANSPORT</h5>
                        <p>Deliver item Safely,Quick and in affordable price.</p>

                    </div>


                    <hr className="clearfix w-100 d-md-none pb-3" />

                    <div className="col-md-3 mb-md-0 mb-3">

                        <h5 className="text-uppercase">ABOUT US</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#">HOME</a>
                            </li>
                            <li>
                                <a href="#" onClick={e=>{handleAbout(e)}}>ABOUT US</a>
                            </li>
                            <li>
                                <a href="#" onClick={e=>{handleContact(e)}}>CONTACT</a>
                            </li>
                            <li>
                                <a href="#login">LOGIN</a>
                            </li>
                            <li>
                                <a onClick={e=>{handleRegi(e)}}>Register</a>
                            </li>
                        </ul>

                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">

                        <h5 className="text-uppercase">POLICY INFO</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!">Link 1</a>
                            </li>
                            <li>
                                <a href="#!">Link 2</a>
                            </li>
                        </ul>

                    </div>

                </div>

            </div>

            <div className="footer-copyright text-center py-3">© 2021 Copyright:
                <a href="#">CentralTransport</a>
            </div>

        </footer>
        </>
    );
}
export default Footer;