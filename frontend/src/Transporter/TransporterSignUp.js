import React,{useState} from "react";
import "./TransporterSignUp.css";
const TransporterSignup = ({history}) => {
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
        name: "", email: "", phone: "", company: "", password: "", cpassword: ""
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
        const { name, email, phone, company, password} = user;
        const res = await fetch("/registerTransporter", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name, email: email, phone: phone, company: company, password: password, cpassword:password
            })
        });

        const data = await res.json();
        console.log(data);
        if (data.error || !data) {
            window.alert("Invalid Registration");
        } else {
            window.alert("Success");
            history.push("/transSignin");
        }
    }

    return (
        <div class="container-fluid mt-3 mb-5">

            <section className="stle">

                <div class="mask d-flex justify-content-center align-items-center">

                    <div class="container py-5 my-5">

                        <h3 class="tl font-weight-bold text-center white-text pb-2">Get Started Free</h3>
                        <p class="tl lead text-center white-text pt-2 mb-5">Start to explore our product absolutely free.</p>

                        <div class="row d-flex align-items-center justify-content-center">
                            <div class="col-md-6 col-xl-5">

                                <div class="card">
                                    <div class="card-body z-depth-2 px-4">
                                        <div class="md-form mt-3">
                                            <i class="fa fa-user prefix grey-text"></i>
                                            <input type="text" id="form3" value={user.name} placeholder="name" name="name" class="form-control" onChange={e => handleChangeEvent(e)} />
                                            {/* <label for="form3">Your name</label> */}
                                        </div>
                                        <div class="md-form mt-3">
                                            <i class="fa fa-envelope prefix grey-text"></i>
                                            <input type="text" id="form2" value={user.email} placeholder="email" name="email" class="form-control" onChange={e => handleChangeEvent(e)} />
                                            {/* <label for="form2">Your email</label> */}
                                        </div>
                                        <div class="md-form mt-3">
                                            <i class="fa fa-user prefix grey-text"></i>
                                            <input type="number" id="form3" value={user.phone} placeholder="phone" name="phone" class="form-control" onChange={e => handleChangeEvent(e)} />
                                            {/* <label for="form3">Your mobile</label> */}
                                        </div>
                                        <div class="md-form mt-3">
                                            <i class="fas fa-key prefix grey-text"></i>
                                            <input type="text" id="form4" value={user.company} placeholder="company" name="company" class="form-control" onChange={e=>handleChangeEvent(e)}/>
                                            {/* <label for="form4">Work</label> */}
                                        </div>
                                        <div class="md-form mt-3">
                                            <i class="fas fa-key prefix grey-text"></i>
                                            <input type="password" id="form4" value={user.password} placeholder="password" name="password" class="form-control"minlength="8" onChange={e => handleChangeEvent(e)} />
                                            {/* <label for="form4">Your password</label> */}
                                        </div>
                                        <div class="md-form mt-3">
                                            <i class="fas fa-key prefix grey-text"></i>
                                            <input type="password" id="form4" value={user.cpassword} placeholder="cpassword" name="cpassword" class="form-control"minlength="8" onChange={e => handleChangeEvent(e)} />
                                            {/* <label for="form4">Confirm password</label> */}
                                        </div>
                                       
                                        <div class="md-form mt-3">
                                            <i class="fas fa-key prefix grey-text"></i>
                                            <input type="text" id="form4" placeholder="gender" name="gender" class="form-control" />
                                            {/* <label for="form4">Gender</label> */}
                                        </div>
                                        <div class="md-form mt-3">
                                            <i class="fas fa-key prefix grey-text"></i>
                                            <input type="date" id="form4"placeholder="name" name="name" class="form-control" />
                                            {/* <label for="form4">Date of Birth</label> */}
                                        </div>
                                        <div class="text-center my-3">
                                            <button class="btn btn-indigo btn-block" onClick={e=>{submitData(e)}}>SIGNUP</button>
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

export default TransporterSignup;