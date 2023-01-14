import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function NavBar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const location = useLocation();
  //   const [loggedIn, setLoggedIn] = useState(null);
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [location]);
  // console.log(token);

  return (
    <Navbar bg="dark" expand="sm" variant="dark" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">Bookio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            {token ? (
              <Nav.Link href="/bookings">Bookings</Nav.Link>
            ) : (
              <>
                <Nav.Link href="/signUp">Sign Up</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
