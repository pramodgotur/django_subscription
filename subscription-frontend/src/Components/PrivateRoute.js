import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

const Auth = {
  isAuthenticated: localStorage.getItem("token") ? true : false,
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      Auth.isAuthenticated === true ? <Component {...props} /> : <Redirect to="/signin" />
    }
  />
);

export default PrivateRoute;
export { Auth };
