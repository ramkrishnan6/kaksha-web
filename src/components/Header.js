import React from "react";
import { Button, Navbar, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Header() {
    const history = useHistory();

    const logout = () => {
        localStorage.clear("auth-token");
        history.push("/login");
    };

    return (
        <Navbar bg="dark" variant="dark" className="mb-5">
            <Navbar.Brand href="#home">Ram's Kaksha</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            <Button variant="danger" onClick={logout}>
                Logout
            </Button>
        </Navbar>
    );
}

export default Header;
