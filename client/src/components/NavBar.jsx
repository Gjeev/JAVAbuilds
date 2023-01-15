import { useState,useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
const BaseURL = "http://localhost:3000/user";
import axios from "axios";
export default function NavBar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [token, setToken] = useState((localStorage.getItem("token")));
  const location = useLocation();
  function handleLogout()
  {
    axios.delete(`${BaseURL}/logout`,{token: token})
    .catch((err) => console.log(err))
    .then((res) => 
    {
      console.log(res);
    //   if(res.data.message == "success in deleting")
    // {
    //     window.location.href= "http://localhost:5137/";
    // }
    }
    
    );
    localStorage.clear();
    
  }
  //   const [loggedIn, setLoggedIn] = useState(null);
  useEffect(() => {
    setToken((localStorage.getItem("token")));
  }, [location]);
  console.log(token);

  return (
    <Navbar bg="dark" expand="sm" variant="dark" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">Bookio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            {token ? (
                <><Nav.Link href="/bookings">Bookings</Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                </>
            ) : (<><Nav.Link href="/signUp">Sign Up</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link></>)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
