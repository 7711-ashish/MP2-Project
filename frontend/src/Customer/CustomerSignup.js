import React,{useState} from "react";
import "./CustomerSignup.css";
const CustomerSignup = ({history}) => {
    // useEffect(() => {
    //     async function fetchCustomer() {
    //       const response = sessionStorage.getItem("authToken");
    //       if(response)
    //         window.alert("WELCOME");
    //     else
    //         history.push("/Customersignin")
    //     }
    //     fetchCustomer();
    //   }, []);



    const [user, setUser] = useState({
        name: "", email: "", phone: "", work: "", password: "", capassword: "", date:""
    });
    let name, value;
    const handleChangeEvent = (e,field) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
        if (field === 'email') {
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (value.match(mailformat)) {
                setUser({ ...user, [name]: value })
                return true
            } else {
                alert("You have entered an invalid email address!");
                return false
            }
        } else if (field === 'password') {
            var passwordFormat = /^[A-Za-z]\w{7,14}$/;
            if (value.match(passwordFormat)) {
                setUser({ ...user, [name]: value })
                return true
            }else{
                alert("Input Password and Submit [7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter]")
            }
        }
    }
    // sign in
    // const getToSignIn = e => {
    //     e.preventDefault()
    //     history.push('/login')
    // }
    
    
    // submiting data to backend
    const submitData = async(e) => {
        e.preventDefault();
        const { name, email, phone, work, password,date} = user;
        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name, email: email, phone: phone, work: work, password: password, cpassword:password, dob:date
            })
        });

        const data = await res.json();
        console.log(data);
        if (data.error || !data) {
            window.alert("Invalid Registration");
        } else {
            window.alert("Success");
            history.push("/Customersignin");
        }
    }

    return (
        <div className="container-fluid mt-3 mb-5">

            <section classNameName="stle">

                <div className="mask d-flex justify-content-center align-items-center">

                    <div className="container py-5 my-5">

                        <h3 className="tl font-weight-bold text-center white-text pb-2">Get Started Free</h3>
                        <p className="tl lead text-center white-text pt-2 mb-5">Start to explore our product absolutely free.</p>

                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-md-6 col-xl-5">

                                <div className="card">
                                    <div className="card-body z-depth-2 px-4">
                                        <div className="md-form mt-3">
                                            <i className="fa fa-user prefix grey-text"></i>
                                            <input type="text" id="form3" value={user.name} placeholder="name" name="name" className="form-control" onChange={e => handleChangeEvent(e)} />
                                            {/* <label for="form3">Your name</label> */}
                                        </div>
                                        <div className="md-form mt-3">
                                            <i className="fa fa-envelope prefix grey-text"></i>
                                            <input type="text" id="form2" value={user.email} placeholder="email" name="email" className="form-control" onChange={e => handleChangeEvent(e)} />
                                            {/* <label for="form2">Your email</label> */}
                                        </div>
                                        <div className="md-form mt-3">
                                            <i className="fa fa-user prefix grey-text"></i>
                                            <input type="number" id="form3" value={user.phone} placeholder="phone" name="phone" className="form-control" onChange={e => handleChangeEvent(e)} />
                                            {/* <label for="form3">Your mobile</label> */}
                                        </div>
                                        <div className="md-form mt-3">
                                            <i className="fas fa-key prefix grey-text"></i>
                                            <input type="text" id="form4" value={user.work} placeholder="work" name="work" className="form-control"onChange={e => handleChangeEvent(e)} />
                                            {/* <label for="form4">Work</label> */}
                                        </div>
                                        <div className="md-form mt-3">
                                            <i className="fas fa-key prefix grey-text"></i>
                                            <input type="text" id="form4" value={user.password} placeholder="password" name="password" className="form-control" onChange={e => handleChangeEvent(e)} />
                                            {/* <label for="form4">Your password</label> */}
                                        </div>
                                        <div className="md-form mt-3">
                                            <i className="fas fa-key prefix grey-text"></i>
                                            <input type="text" id="form4" value={user.password} placeholder="cpassword" name="cpassword" className="form-control" onChange={e => handleChangeEvent(e)} />
                                            {/* <label for="form4">Confirm password</label> */}
                                        </div>
                                       
                                        <div className="md-form mt-3">
                                            <i className="fas fa-key prefix grey-text"></i>
                                            <input type="text" id="form4" placeholder="gender" name="gender" className="form-control" />
                                            {/* <label for="form4">Gender</label> */}
                                        </div>
                                        <div className="md-form mt-3">
                                            <i className="fas fa-key prefix grey-text"></i>
                                            <input type="date" id="form4"placeholder="date" name="date"value={user.date} className="form-control" onChange={e => handleChangeEvent(e)} />
                                            {/* <label for="form4">Date of Birth</label> */}
                                        </div>
                                        <div className="text-center my-3">
                                            <button className="btn btn-indigo btn-block" onClick={e=>{submitData(e)}}>SIGNUP</button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


        </div>
    )

}

export default CustomerSignup;