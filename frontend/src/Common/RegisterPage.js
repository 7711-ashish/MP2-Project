import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
const RegisterPage = ({ history }) => {
    const handleCustomer=(e)=>{
        history.push('/customerSignup');
    }
    const handleTrans=(e)=>{
        history.push('/TransporterSignup');
    }
    return (
        <>
        <Navbar/>
        <div className="container my-5">
            <section className="dark-grey-text">
                <h3 className="text-center font-weight-bold mb-4 pb-2">Start your journy</h3>
                <hr className="w-header"/>
                <p className ="lead text-center w-responsive mx-auto text-muted mt-4 pt-2 mb-5">Register Here for more services.</p>
                <div className ="row">

                <div className ="col-md-6 mb-4">
                <a onClick={e=>handleCustomer(e)} className ="card hoverable">
                    <div className ="card-body">
                        <div className ="media">
                            <span className ="card-img-100 d-inline-flex justify-content-center align-items-center rounded-circle grey lighten-3 mr-4">
                            <i className ="far fa-user fa-2x purple-text"></i>
                            </span>
                            <div className ="media-body">
                            <h5 className ="dark-grey-text mb-3">AS A Customer</h5>
                            <p className ="font-weight-light text-muted mb-0">You can book truck of your choice and many more.</p>
                        </div>
                    </div>
                    </div>
                </a>
                </div>
                <div className ="col-md-6 mb-4">
                <a onClick={e=>handleTrans(e)} className ="card hoverable">
                <div className ="card-body">

                <div className ="media">
                <span className ="card-img-100 d-inline-flex justify-content-center align-items-center rounded-circle grey lighten-3 mr-4">
                <i className ="far fa-user fa-2x purple-text"></i>
                </span>
                <div className ="media-body">
                <h5 className ="dark-grey-text mb-3">As a Transporter</h5>
                <p className ="font-weight-light text-muted mb-0">You can grow your business with us.</p>
                </div>
                </div>

                </div>

                </a>

                </div>

                </div>

            </section>


        </div>
        <Footer/>
        </>
    )
}

export default RegisterPage;