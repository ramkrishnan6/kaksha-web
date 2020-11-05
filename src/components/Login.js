import React, { useRef, useState } from "react";
import {
    Form,
    Button,
    Card,
    Alert,
    Image,
    Row,
    Container,
} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { API_URL } from "../constants/api";
import logo from "../assets/logo.svg";
import Header from "./Header";

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function loginUser(e) {
        e.preventDefault();

        setError("");
        setLoading(true);

        axios
            .post(`${API_URL}/user/login`, {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            })
            .then((res) => {
                localStorage.setItem("auth-token", res.data.token);
                redirectToDashboard();
            })
            .catch((err) => {
                setError(err.response.data.message);
            });
        setLoading(false);
    }

    const redirectToDashboard = () => {
        history.push("/dashboard");
    };

    if (localStorage.getItem("auth-token"))
        return <Redirect to="/dashboard"></Redirect>;

    return (
        <>
            <Header />

            <Container className="d-flex align-items-center justify-content-center">
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <Card>
                        <Card.Body>
                            <Row className="justify-content-center">
                                <Image
                                    src={logo}
                                    height={100}
                                    width={150}
                                    className="mx-auto"
                                />
                            </Row>

                            <h2 className="text-center mb-4">Login</h2>
                            {error && <Alert variant="danger">{error}</Alert>}

                            <Form onSubmit={loginUser}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        ref={emailRef}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        ref={passwordRef}
                                        required
                                    />
                                </Form.Group>

                                <Button
                                    disabled={loading}
                                    className="w-100"
                                    type="submit"
                                >
                                    Login
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Need an account? <Link to="/register">Register</Link>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Login;
