import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <div>
            <Router>
                <PrivateRoute exact path="/dashboard">
                    <Dashboard />
                </PrivateRoute>

                <Container
                    className="d-flex align-items-center justify-content-center"
                    style={{ minHeight: "80vh" }}
                >
                    <div className="w-100" style={{ maxWidth: "400px" }}>
                        <Switch>
                            <Route
                                exact
                                path="/register"
                                component={Register}
                            />
                            <Route exact path="/login" component={Login} />
                        </Switch>
                    </div>
                </Container>
            </Router>
        </div>
    );
}

export default App;
