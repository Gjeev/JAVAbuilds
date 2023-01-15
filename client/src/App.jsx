import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashBoard from "./pages/home/DashBoard";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Booking from "./pages/booking/Booking";
import CheckOutOK from "./components/CheckOutOK";
import Error from "./components/Error";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <>
            <NavBar></NavBar>
            <DashBoard></DashBoard>
          </>
        </Route>

        <Route exact path="/signUp">
        <div className="d-flex flex-column justify-content-center align-items-center min-vh-100"><SignUp></SignUp></div>
          
        </Route>

        <Route exact path="/login">
        <div className="d-flex flex-column justify-content-center align-items-center min-vh-100"><Login></Login></div>
          
        </Route>
        
        <Route exact path="/bookings">
        <Booking></Booking>
      </Route>

      <Route exact path="/booking/checkout-session">
        <CheckOutOK></CheckOutOK>
      </Route>

      <Route path="*">
        <Error></Error>
      </Route>
      </Switch>
      

      
    </Router>
  );
}
