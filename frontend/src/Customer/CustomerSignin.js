import React,{useState, useEffect} from 'react';
import "./CustomerSignin.css"
import Footer from '../Common/Footer';
const CustomerSignin = ({history}) => {
    useEffect(() => {
        async function fetchCustomer() {
          const response = sessionStorage.getItem("authToken");
          if(response){
          history.push(`/customer/${response}/dashboard`);}
        }
        fetchCustomer();
      }, []);
    let [userData, setUserData] = useState({})
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const getToSignUp = e => {
        e.preventDefault()
        history.push('/customerSignup')
    }
    const handleChangeEvent = (e, title) => {
        let value = e.target.value
        setUserData({ ...userData, [title]: value })

    }
    
    const submitData = async(e) => {
        e.preventDefault()
        console.log(userData)
        const res =await fetch('/signin', {
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
            history.push('/customerSignup')
        } else {
            window.alert("Success");
            let { token } = data;
            console.log(token);
            sessionStorage.setItem("user_email",email);
            sessionStorage.setItem('authToken', token)
            console.log(sessionStorage.getItem('authToken'));
            history.push(`/customer/${token}/dashboard`);
        }
    }
    const handleCont=()=>{
        history.push('./Contact')
    }
    const handleHome=(e)=>{
        e.preventDefault();
        history.push('/')
    }
    const handleAbout=(e)=>{
        // e.preventDefault();
        history.push('./AboutUs')
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
                                <a className="nav-link" to="/AboutUs" onClick={e=>handleAbout()}>About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={e=>handleCont()}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container my-5 px-0 z-depth-1">
                <section className="p-5 my-md-5 text-center sec">
                    <form className="my-5 mx-md-5">
                        <div className="row">
                            <div className="col-6">
                                <div className="card">
                                    <div className="card-body">
                                            <h3 className="font-weight-bold my-4 pb-2 text-center dark-grey-text">Log In Customer</h3>
                                            <input type="email" id="defaultSubscriptionFormPassword" className="form-control mb-4" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                                            <input type="password" id="defaultSubscriptionFormEmail" className="form-control" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                                            <small id="passwordHelpBlock" className="form-text text-right blue-text">
                                                <a href="" onClick={e=>getToSignUp(e)}>SIGN UP?</a>
                                            </small>
                                            <div className="text-center">
                                                <button type="button" className="btn btn-warning btn-rounded my-4 waves-effect" onClick={e=>submitData(e)}>LOGIN</button>
                                            </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-6">
                                
                                        <img style={{"width":"104%","height":"100%"}} src="https://www.loginradius.com/blog/start-with-identity/static/3b4c33cef1861297f7da778dff9074a7/a3513/login-security.png"></img>
                                
                            </div>
                        </div>

                    </form>

                </section>
            </div>
            <Footer />
        </>
    )
}
export default CustomerSignin;
