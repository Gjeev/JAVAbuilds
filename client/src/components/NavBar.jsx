import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
    const [loggedIn,setLoggedIn]= useState(null)
    return (
        <Navbar bg="dark" expand="sm" variant="dark" collapseOnSelect>
        <Container>
            <Navbar.Brand href="/">Bookio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/user">Profile</Nav.Link>
                <Nav.Link href="/signUp">Sign Up</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/bookings">Bookings</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

