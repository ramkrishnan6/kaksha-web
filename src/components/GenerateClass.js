import React, { useRef } from "react";
import { Form, Button, Card, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function GenerateClass() {
    const classRef = useRef();
    const history = useHistory();

    const redirectToClass = () => {
        history.push(`/class/${classRef.current.value}`);
    };

    const generateRandom = () => {
        let random = Math.random().toString(36).substring(7);
        classRef.current.value = random;
    };

    return (
        <>
            <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "20vh" }}
            >
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">
                            Generate New Classroom
                        </h2>

                        <Form onSubmit={redirectToClass}>
                            <Form.Group id="classname">
                                <Form.Label>Class Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    ref={classRef}
                                    required
                                />
                            </Form.Group>
                            <Row>
                                <Button
                                    className="col-xl-6 mx-auto"
                                    type="submit"
                                >
                                    Generate Class
                                </Button>
                                <Button
                                    className="col-xl-4 mx-auto"
                                    onClick={generateRandom}
                                    variant="dark"
                                >
                                    Random name
                                </Button>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default GenerateClass;
