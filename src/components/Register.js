import React, { useRef, useState } from "react";
import {
    Form,
    Button,
    Card,
    Alert,
    Row,
    Image,
    Container,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../constants/api";
import logo from "../assets/logo.svg";
import Header from "./Header";

function Register() {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const roleRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function registerUser(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match");
        }
        setError("");
        setLoading(true);

        axios
            .post(`${API_URL}/user/register`, {
                first_name: firstNameRef.current.value,
                last_name: lastNameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
                role: roleRef.current.value,
            })
            .then((res) => {
                redirectToLogin();
            })
            .catch((err) => {
                setError(err.response.data.message);
            });
        setLoading(false);
    }

    const redirectToLogin = () => {
        history.push("/login");
    };

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

                            <h2 className="text-center mb-4">Register</h2>
                            {error && <Alert variant="danger">{error}</Alert>}

                            <Form onSubmit={registerUser}>
                                <Form.Group id="first_name">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        ref={firstNameRef}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group id="last_name">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        ref={lastNameRef}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        ref={emailRef}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group id="first_name">
                                    <Form.Label>Role</Form.Label>

                                    <Form.Control
                                        as="select"
                                        ref={roleRef}
                                        required
                                    >
                                        <option value="student">Student</option>
                                        <option value="teacher">Teacher</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        ref={passwordRef}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group id="password-confirm">
                                    <Form.Label>
                                        Password Confirmation
                                    </Form.Label>
                                    <Form.Control
                                        type="password"
                                        ref={passwordConfirmRef}
                                        required
                                    />
                                </Form.Group>

                                <Button
                                    disabled={loading}
                                    className="w-100"
                                    type="submit"
                                >
                                    Register
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Already have an account? <Link to="/login">Log In</Link>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Register;
