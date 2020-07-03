import React from "react";
import "./App.css";
import Login from "./Components/Accounts/Login";
import SignUp from "./Components/Accounts/SignUp";
import NavBar from "./Components/NavBar";
import Toaster from "./Components/Toaster";
import PrivateRoute from "./Components/PrivateRoute";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Toaster />
        <Switch>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <PrivateRoute path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
