import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ClassRoom from "./components/ClassRoom";
import Report from "./components/Report";
import NotFound from "./components/NotFound";

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <PrivateRoute
                        exact
                        path="/dashboard"
                        component={Dashboard}
                    ></PrivateRoute>

                    <PrivateRoute
                        exact
                        path="/class/:id"
                        component={ClassRoom}
                    ></PrivateRoute>

                    <PrivateRoute
                        exact
                        path="/report"
                        component={Report}
                    ></PrivateRoute>

                    <Route exact path="/" component={Home} />

                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
