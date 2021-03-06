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



    const [transporter, settransporter] = useState({
        name: "", email: "", phone: "", company: "",address:"",pincode:"", password: "", cpassword: ""
    });
    let name, value;
    const handleChangeEvent = (e,field) => {
        name = e.target.name;
        value = e.target.value;
        settransporter({ ...transporter, [name]: value })
        if (field === 'email') {
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (value.match(mailformat)) {
                settransporter({ ...transporter, [name]: value })
                return true
            } else {
                alert("You have entered an invalid email address!");
                return false
            }
        } else if (field === 'password') {
            var passwordFormat = /^[A-Za-z]\w{7,14}$/;
            if (value.match(passwordFormat)) {
                settransporter({ ...transporter, [name]: value })
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
        const { name, email, phone, company,address,pincode, password} = transporter;
        const res = await fetch("/registerTransporter", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name, email: email, phone: phone, company: company,address:address,pincode:pincode, password: password, cpassword:password
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
    const mystyle = {
        width : "50%",
        margin : "0 auto",
    }

    return (
        <div className="container-fluid stle">

            <section >

                <div class="mask d-flex justify-content-center align-items-center">

                    <div class="container py-5 my-5">

                        <h3 class="tl font-weight-bold text-center white-text pb-2">Get Started Free</h3>
                        <p class="tl lead text-center white-text pt-2 mb-5">Start to explore our services.</p>

                        <div class="row d-flex align-items-center justify-content-center">
                            <div class="col-md-6 col-xl-5">

                                <div class="card">
                                    <div class="card-body z-depth-2 px-4">
                                        <div class="md-form mt-3">
                                            <input type="text"  value={transporter.name} placeholder="name" name="name" class="form-control" onChange={e => handleChangeEvent(e)} />
                                        </div>
                                        <div class="md-form mt-3">
                                            <input type="text"  value={transporter.email} placeholder="email" name="email" class="form-control" onChange={e => handleChangeEvent(e)} />
                                        </div>
                                        <div class="md-form mt-3">
                                            <input type="number"  value={transporter.phone} placeholder="+91 1234567980" name="phone" class="form-control" onChange={e => handleChangeEvent(e)} />
                                        </div>
                                        <div class="md-form mt-3">
                                            <input type="text"  value={transporter.company} placeholder="Company Name" name="company" class="form-control" onChange={e=>handleChangeEvent(e)}/>
                                        </div>
                                        <div class="md-form mt-3">
                                            <input type="text" value={transporter.address}placeholder="Address" name="address" class="form-control" onChange={e=> handleChangeEvent(e)}/>
                                        </div>
                                        <div class="md-form mt-3">
                                            <input type="text" value={transporter.pincode}placeholder="Pin Code" name="pincode" class="form-control" onChange={e=> handleChangeEvent(e)}/>
                                        </div>
                                        <div class="md-form mt-3">
                                            <input type="password"  value={transporter.password} placeholder="password" name="password" class="form-control"minlength="8" onChange={e => handleChangeEvent(e)} />
                                        </div>
                                        <div class="md-form mt-3">
                                            <input type="password"  value={transporter.cpassword} placeholder="cpassword" name="cpassword" class="form-control"minlength="8" onChange={e => handleChangeEvent(e)} />
                                        </div>
                                       
                                        <div class="md-form mt-3">
                                            <input type="text"  placeholder="gender" name="gender" class="form-control" />
                                        </div>
                                        <div class="md-form mt-3">
                                            <input type="date" placeholder="name" name="name" class="form-control" />
                                        </div>
                                        <div class="text-center my-3">
                                            <button class="btn btn-primary btn-block" style={mystyle} onClick={e=>{submitData(e)}}>SIGNUP</button>
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