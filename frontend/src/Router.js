import React from "react";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Register} path="/register"/>
                <Route component={Home} path="/"/>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;