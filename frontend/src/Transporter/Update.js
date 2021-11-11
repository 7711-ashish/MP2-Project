import React,{useState} from "react";
import { useParams} from 'react-router-dom';
import Options from "../Common/Options"


const Update = ({history}) => {
    const [user, setUser] = useState({
        name: "", pickupcity: "", dropcity: "", capacitty: "",price:""
    });
    const {id} = useParams();
    console.log(id)        
        let name,value;
        const handleChangeEvent = (e) => {
            e.preventDefault();
            name = e.target.name;
            value = e.target.value;
            setUser({ ...user, [name]: value })
            
        }

        const handleUpdate = (e) => {
            e.preventDefault();
            const number = localStorage.getItem("trucknumber")
            const{name,pickupcity,dropcity,capacitty,price} = user;
            const res = fetch(`/transporter/update/${id}`,{
                method: "POST",
                headers: {
                   "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,number:number,pickupcity:pickupcity,dropcity:dropcity,capacitty:capacitty.replace,price:price
                })
            }).then(res => res.json()).then(data=>{console.log(data);history.push("/transporteTruckList")})
        }

    return (
        <>
            <div className="container">
            <div className="flex-container">
                <div className="row full">
                    <div className="col-md-12">
                        <div className="form-container">
                            <div className="form-container-in"></div>
                            <div className="row sgnUp ">
                                <div className="col-md-6 right-divider pdding">
                                    <h1 className="lead-text mn-txt">
                                        UPDATE TRUCK
                                    </h1>
                                </div>
                                <div className="left-divider">
                                    <div className="col-md-6">
                                        <form  onSubmit={e => handleUpdate(e)}>
                                            <div className="form-group2">
                                                <label htmlFor="name">Truck Name:</label>
                                                <input id="name" type="text" className="form-control sgnUp" value={user.name} placeholder="name" name="name" onChange={e => handleChangeEvent(e)}/>
                                            </div>
                                            {/* <div className="form-group2">
                                                <label htmlFor="name">TRUCK ID</label>
                                                <input id="name" type="text" className="form-control sgnUp"name="name"  />
                                            </div> */}
                                            <div class="form-group2">
                                                <label htmlFor="mob-number">Truck Number</label>
                                                <input required id="mob-number" type="text" className="form-control sgnUp"value={localStorage.getItem("trucknumber")} disabled/>
                                            </div>
                                            {/* <div class="form-group2">
                                                <label htmlFor="mob-number">Driver Name</label>
                                                <input required id="mob-number" type="text" className="form-control sgnUp" onChange={e => handleChangeEvent(e, 'mobile')} />
                                            </div> */}
                                            <div class="form-group2">
                                                <label htmlFor="mob-number">Truck comapany</label>
                                                <input required id="mob-number" type="text" className="form-control sgnUp" value={localStorage.getItem("truckcompany")} placeholder="company" name="company"disabled />
                                            </div>
                                            <div class="form-group2">
                                                <label htmlFor="mob-number">Truck capacity</label>
                                                <input required id="mob-number" type="text" className="form-control sgnUp" value={user.capacitty} placeholder="capacitty" name="capacitty"onChange={e => handleChangeEvent(e)} />
                                            </div>
                                            <div class="form-group2">
                                                {/* <label htmlFor="mob-number">Route Pickup City</label>
                                                <input required id="mob-number" type="text" className="form-control sgnUp"value={user.pickupcity} placeholder="pickupcity" name="pickupcity" onChange={e => handleChangeEvent(e)} /> */}
                                                <label htmlFor="state">PICK UP CITY</label>
                                                        <select className="custom-select d-block w-100"value={user.pickupcity}name="pickupcity"onChange={e => handleChangeEvent(e)} id="state"required>
                                                            <option>--Choose City--</option>
                                                            {Options.map((e, key) => {
                                                                    return <option key={key}>{e.name}</option>;
                                                            })}
                                                        </select>
                                                {/* <label htmlFor="mob-number">Route Drop City</label>
                                                <input required id="mob-number" type="text" className="form-control sgnUp"value={user.dropcity} placeholder="dropcity" name="dropcity" onChange={e => handleChangeEvent(e)} /> */}
                                                <label htmlFor="state">DROP CITY</label>
                                                        <select className="custom-select d-block w-100"value={user.dropcity}name="dropcity"onChange={e => handleChangeEvent(e)}id="state"required>
                                                            <option>--Choose City--</option>
                                                            {Options.map((e, key) => {
                                                                    return <option key={key}>{e.name}</option>;
                                                            })}
                                                        </select>
                                            </div>
                                            <div class="form-group2">
                                                <label htmlFor="mob-number">Price</label>
                                                <input required id="mob-number" type="number" className="form-control sgnUp" value={user.number} placeholder="price" name="price"onChange={e => handleChangeEvent(e)} />
                                            </div>
                                            <div className="form-group2">
                                                <label htmlFor="name">Transporter</label>
                                                <input id="name" type="text" className="form-control sgnUp" value={localStorage.getItem("truckemail")}placeholder="transemail" name="transemail" disabled/>
                                            </div>
                                            <div class="form-group2">
                                                <input required type="submit" value="update" className="btn-primary btnn form-submit sub-btn sgnUp"/>
                                        </div>
                                            <div className="form-group2">
                                                <label htmlFor="name">ALAWAY TRANSPORT SAFELY</label>
                                            </div>
                                        </form>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Update;