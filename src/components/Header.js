import React from "react";
import { Button, Navbar, Nav, NavItem } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Header({ userName }) {
    const history = useHistory();

    const logout = () => {
        localStorage.clear("auth-token");
        history.push("/login");
    };

    return (
        <Navbar bg="dark" variant="dark" className="mb-5">
            <Navbar.Brand href="/">Ram's Kaksha</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link className="ml-auto">{userName}</Nav.Link>
            </Nav>
            <Button variant="danger" onClick={logout}>
                Logout
            </Button>
        </Navbar>
    );
}

export default Header;
