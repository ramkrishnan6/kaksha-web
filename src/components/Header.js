import React from "react";
import { Button, Navbar, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import logo from "../assets/logo.svg";

function Header({ userName, leaveClass }) {
    const history = useHistory();

    const logout = () => {
        localStorage.clear("auth-token");
        if (leaveClass) {
            leaveClass.disconnect();
        }
        history.push("/login");
    };

    return (
        <Navbar bg="dark" variant="dark" className="mb-5">
            <Navbar.Brand href="/">
                <img src={logo} style={{ width: 120, marginTop: -10 }} />
            </Navbar.Brand>
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
