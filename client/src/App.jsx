import "./css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/home/DashBoard";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Booking from "./pages/booking/Booking";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact
          path="/"
          element={
            <>
              <NavBar></NavBar>
              <DashBoard></DashBoard>
            </>
          }
        ></Route>
        <Route
          exact
          path="/signUp"
          element={
            <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
              <SignUp></SignUp>
            </div>
          }
        ></Route>
        <Route
          exact
          path="/login"
          element={
            <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
              <Login></Login>
            </div>
          }
        ></Route>
        <Route
          exact
          path="/bookings"
          element={
            <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
              <Booking/>
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  );
}
