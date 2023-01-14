import { useState,useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function NavBar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();
  //   const [loggedIn, setLoggedIn] = useState(null);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  console.log(user);

  return (
    <Navbar bg="dark" expand="sm" variant="dark" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">Bookio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            {user ? (
                <><Nav.Link href="/bookings">Bookings</Nav.Link></>
            ) : (<><Nav.Link href="/signUp">Sign Up</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link></>)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
