import React,{useState,useEffect} from 'react';
import "../Customer/CustomerSignin.css"
import Footer from '../Common/Footer';
const TransporterSignin = ({history}) => {
    let [userData, setUserData] = useState({})
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        async function fetchTransporter() {
            const token = sessionStorage.getItem('transauthToken');
            const response = sessionStorage.getItem("transauthToken");
            if(response)
              history.push(`/transporter/${token}/dashboard`);
          }
          fetchTransporter();
    }, [])


    const getToSignUp = e => {
        e.preventDefault()
        history.push('/TransporterSignup')
    }
    const handleChangeEvent = (e, title) => {
        let value = e.target.value
        setUserData({ ...userData, [title]: value })
    }
    const handleCont=()=>{
        history.push('./Contact')
    }
    const handleHome=(e)=>{
        e.preventDefault();
        history.push('/')
    }
    
    const submitData = async(e) => {
        e.preventDefault()
        console.log(userData)
        const res =await fetch('/Transsignin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
               email: email, password: password
            })
        });
        const data = await res.json();
        console.log(data)
        if (data.error) {
            window.alert("Unsucessful Login");
            history.push('/TransporterSignup')
        } else {
            window.alert("Success");
            let { token } = data
            sessionStorage.setItem('transemail',email);
            sessionStorage.setItem('transauthToken', token)
            console.log(data);
            history.push(`/transporter/${data.token}/dashboard`);
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-col mb-4 bg-unique hm-gradient">
                <div className="container-fluid">
                    <a className="navbar-brand" to="#">FREIGHT-CENTRAL</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"data-target="#navbarSupprtedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-lg-4 mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link active" aria-current="page" to="/"onClick={e=>handleHome(e)}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" to="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={e=>handleCont()}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="container my-5 px-0 z-depth-1">
                <section class="p-5 my-md-5 text-center sec">

                    <form class="my-5 mx-md-5" action="">

                        <div class="row">
                            <div class="col-md-6 mx-auto">
                                <div class="card">
                                    <div class="card-body">
                                        <form class="text-center col_clor" action="#!">

                                            <h3 class="font-weight-bold my-4 pb-2 text-center dark-grey-text">Log In Transporter</h3>
                                            <input type="email" id="defaultSubscriptionFormPassword" class="form-control mb-4"value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                            <input type="password" id="defaultSubscriptionFormEmail" class="form-control"value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                            <small id="passwordHelpBlock" class="form-text text-right blue-text">
                                                <a onClick={e=>{getToSignUp(e)}}>Sign up</a>
                                            </small>
                                            <div class="text-center">
                                                <button type="button" class="btn btn-warning btn-rounded my-4 waves-effect" onClick={e=>submitData(e)}>LOGIN</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>

                </section>
            </div>
            <Footer />
        </>
    )
}
export default TransporterSignin;
