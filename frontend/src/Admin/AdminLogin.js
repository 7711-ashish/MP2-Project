import React,{useState, useEffect} from 'react';
import "../Customer/CustomerSignin.css";
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import "./AdminLogin.css"
const AdminLogin = ({history}) => {
    // useEffect(() => {
    //      function fetchCustomer() {
    //       const response = sessionStorage.getItem("authToken");
    //       if(response.length > 0)
    //         sessionStorage.clear();
    //     }
    //     fetchCustomer();
    //   }, []);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const submitData = async(e) => {
        // e.preventDefault()
        // console.log(userData)
        // const res =await fetch('/admin', {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //        email: email, password: password
        //     })
        // });
        // const data = await res.json();
        // console.log(data)
        // if (data.error) {
        //     window.alert("Unsucessful Login");
        //     history.push('/customerSignup')
        // } else {
        //     window.alert("Success");
        //     let { token } = data;
        //     console.log(token);
        //     sessionStorage.setItem('authTokenAdmin', token)
        //     console.log(sessionStorage.getItem('authToken'));
        //     history.push("/customerDash");
        // }
        if(email === "sutarashish37@gmail.com" && password === "Ashish_7711"){
            history.push("/adminDash")
        }
        else{
            window.alert("Invalid Credentials");
        }
    }
    return (
        <>
            <Navbar />
            <div className="container my-5 px-0 z-depth-1 sec">
                <section className="p-5 my-md-5 text-center sec">

                    <form className="my-5 mx-md-5" action="">

                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <div className="card">
                                    <div className="card-body">
                                        <form className="text-center col_clor" action="#!">

                                            <h3 className="font-weight-bold my-4 pb-2 text-center dark-grey-text">ADMIN</h3>
                                            <input type="email" id="defaultSubscriptionFormPassword" className="form-control mb-4" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                                            <input type="password" id="defaultSubscriptionFormEmail" className="form-control" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>

                                            <div className="text-center">
                                                <button type="button" className="btn btn-warning btn-rounded my-4 waves-effect" onClick={e=>submitData(e)}>LOGIN</button>
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
export default AdminLogin;
