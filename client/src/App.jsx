import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashBoard from "./pages/home/DashBoard";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Booking from "./pages/booking/Booking";
// import Booking from "./pages/booking/Booking";

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

        <Route exact path="/user/signUp">
          <SignUp></SignUp>
        </Route>

        <Route exact path="/user/login">
          <Login></Login>
        </Route>

        <Route exact path="/bookings">
        <Booking></Booking>
      </Route>
      </Switch>

      
    </Router>
  );
}
