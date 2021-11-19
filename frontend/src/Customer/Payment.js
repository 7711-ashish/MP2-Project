import React,{useState} from "react";
import { useHistory } from "react-router";


const Payment = React.forwardRef((props, ref) => {
    
    const history = useHistory();
    const[address1, setAddress1] = useState();
    const[address2, setAddress2]= useState();
    const date = new Date().getDate();
    const handleConfirm =(e)=>{
        e.preventDefault();
        const user = sessionStorage.getItem('user_email');
        const pickupcity= localStorage.getItem('pickupcity'); 
        const dropcity= localStorage.getItem('dropcity');
        const date= Date.now();
        const weight = localStorage.getItem('weight');
        const price = localStorage.getItem('price');
        const adminemail = localStorage.getItem('adminemail');
        const truckid = localStorage.getItem('truckId');
        const typeofgoods = localStorage.getItem('typeofgoods');
        const typeoftruck = localStorage.getItem('typeoftruck');
        console.log(typeofgoods);
        fetch('/booking',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user, pickupcity, dropcity, date, weight, adminemail,truckid,typeofgoods,price,Address1:address1,Address2:address2
            })
        }).then(res=>res.json()).then(data=>{window.alert(data.message)});
        localStorage.clear();
        // console.log(localStorage.getItem('pickupcity'));
    }
    const handleCancel = (e)=>{
        localStorage.clear();
        history.push('/customer/truckBook');
    }
    return(<form ref={ref} className="container mt-5 mb-5 card">
        <div className="form-row">
            <div className="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input type="email" className="form-control" id="inputEmail4" value={sessionStorage.getItem("user_email")} disabled/>
            </div>
            <div className="form-group col-md-6">
                <label for="inputPassword4">Truck ID</label>
                <input type="text" className="form-control" id="inputPassword4" placeholder="Password"value={localStorage.getItem("truckId")} disabled/>
            </div>
        </div>
        <div className="form-group">
            <label for="inputAddress">Address1</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" required value={address1} onChange={e=>setAddress1(e.target.value)}/>
        </div>
        <div className="form-group">
            <label for="inputAddress2">Address 2</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" required value={address2} onChange={e=>setAddress2(e.target.value)}/>
        </div>
        <div className="form-row">
            <div className="form-group col-md-5">
                <label for="inputCity">Pickup City</label>
                <input type="text" className="form-control" id="inputCity" value={localStorage.getItem("pickupcity")} disabled/>
            </div>
            <div className="form-group col-md-5">
                <label for="inputState">Drop City</label>
                <input type="text" className="form-control" id="inputState" value={localStorage.getItem("dropcity")} disabled/>
            </div>
            <div className="form-group col-md-2">
                <label for="type">TYPE OF GOODS</label>
                <input type="text" className="form-control" id="type"value={localStorage.getItem("typeofgoods")} disabled/>
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col-md-5">
                <label for="inputCity">TRUCK NUMBER</label>
                <input type="text" className="form-control" id="inputCity" value={localStorage.getItem("truckId")} disabled/>
            </div>
            <div className="form-group col-md-5">
                <label for="date">DATE</label>
                <input type="text" className="form-control" id="date" value={date} disabled/>
            </div>
            <div className="form-group col-md-2">
                <label for="inputZip">PRICE</label>
                <input type="number" className="form-control" id="inputZip"value={localStorage.getItem("price")} disabled/>
            </div>
        </div>
        <div className="form-group">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                <label class ="form-check-label" for="gridCheck">
                    I Accept privacy policy
                </label>
            </div>
        </div>
        {/* <div className="form-group">
            <button type="submit" className="btn btn-primary m-lg-4 col-lg-5">Pay On dilivery</button>
            <button type="submit" className="btn btn-primary m-lg-4 col-lg-5">Pay Now</button>
        </div> */}
        <div className="form-group">
            <button type="submit" className="btn btn-primary m-lg-4 col-lg-6" onClick={e=>handleConfirm(e)}>CONFIRM</button>
            <button type="submit" className="btn btn-primary m-lg-4 col-lg-6" onClick={e=>handleCancel(e)}>CANCLE</button>
        </div>
    </form>
    )
});

export default Payment;

