import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";
import axios from "axios";
import { notify_success, notify_error } from "../Toaster";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };
  submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/api/accounts/login/", this.state)
      .then((response) => {
        console.log(response);
        notify_success(response.data.message);
        localStorage.setItem("token", response.data.data.token);
        this.setState({
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        if (error.response) {
          notify_error(error.response.data.message);
        }
        localStorage.clear();
      });
  };
  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    let isAuthenticated = localStorage.getItem("token") ? true : false;
    console.log("after login...render", isAuthenticated);
    if (isAuthenticated === true) {
      return <Redirect to="/" />;
    }
    return (
      <MDBContainer className="mb-5 mt-5">
        <MDBRow>
          <MDBCol md="6" className="offset-md-3">
            <MDBCard>
              <MDBCardBody>
                <form className="needs-validation" onSubmit={this.submitHandler}>
                  <p className="h5 text-center mb-4">Sign in</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Enter your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      name="email"
                      value={this.state.email}
                      onChange={this.changeHandler}
                    />
                    <MDBInput
                      label="Enter your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      name="password"
                      value={this.state.password}
                      onChange={this.changeHandler}
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn type="submit">Login</MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Login;
