import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Room from "./components/Room";
import Report from "./components/Report";

function App() {
    return (
        <div>
            <Router>
                <PrivateRoute
                    exact
                    path="/dashboard"
                    component={Dashboard}
                ></PrivateRoute>

                <PrivateRoute
                    exact
                    path="/room/:id"
                    component={Room}
                ></PrivateRoute>

                <PrivateRoute
                    exact
                    path="/report"
                    component={Report}
                ></PrivateRoute>

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
                            <Route exact path="/" component={Home} />
                        </Switch>
                    </div>
                </Container>
            </Router>
        </div>
    );
}

export default App;
