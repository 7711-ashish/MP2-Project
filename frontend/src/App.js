// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from "./Homepage/Homepage";
import CustomerSignin from './Customer/CustomerSignin';
import Contact from './Common/Contact';
import RegisterPage from './Common/RegisterPage';
import CustomerDashboard from './Customer/CustomerDashBoard';
import TransporterDashboard from './Transporter/TransporterDashboard';
import TransporterSignin from './Transporter/TransporterSignin';
import TruckBooking from './Customer/TruckBooking';
import CustomerHistory from './Customer/CustomerHistory';
import RegisterTruck from './Truck/RegisterTruck';
import History from './Transporter/History';
import CustomerSignup from './Customer/CustomerSignup';
import AdminLogin from './Admin/AdminLogin';
import Pay from './Customer/Pay';
import TransporterSignup from './Transporter/TransporterSignUp';
import TransporterTruckList from './Transporter/TransporterTruckList';
import BookingRequest from './Transporter/BookingRequest';
import Update from './Transporter/Update';
import TruckDetails from './Transporter/TruckDetails';
import AdminDash from './Admin/AdminDash';
import AboutUs from './Common/AboutUs';
function App() {
  return (
     <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact render={props => <Homepage {...props} />} />
          <Route path="/adminLogin" render={props => <AdminLogin {...props} />} />
          <Route path="/adminDash" render={props=><AdminDash {...props}/>}/>
          <Route path="/Contact" render={props => <Contact {...props} />} />
          <Route path="/AboutUs" render={props => <AboutUs {...props} />} />
          <Route path="/Customersignin" render={props => <CustomerSignin {...props} />} />
          <Route path="/transSignin" render={props => <TransporterSignin {...props} />} />
          <Route path="/adminSignin" render={props => <AdminLogin {...props} />} />
          <Route path="/register" render={props => <RegisterPage {...props} />} />
          <Route path="/customerSignup" render={props =><CustomerSignup {...props}/>}/>
          <Route path="/TransporterSignup" render={props =><TransporterSignup {...props}/>}/>
          <Route path="/customer/:id/dashboard" render={props => <CustomerDashboard {...props} />} />
          <Route path="/transporter/:id/dashboard" render={props => <TransporterDashboard {...props} />} />
          <Route path="/registerTruck" render={props => <RegisterTruck {...props} />} />
          <Route path="/customer/payment" render={props => <Pay {...props}/>} />
          <Route path="/transporteTruckList" render={props => <TransporterTruckList {...props} />} />
          <Route path="/truckDetails/:number" render={props => <TruckDetails {...props} />} />
          <Route path="/transporter/updateTruck/:id" render={props=> <Update {...props}/>} />
          <Route path="/bookingRequests" render={props => <BookingRequest {...props} />} />
          <Route path="/trans/history" render={props => <History {...props} />} />
          <Route path="/customer/truckBook" render={props => <TruckBooking {...props} />} />
          <Route path="/customer/history" render={props => <CustomerHistory {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
