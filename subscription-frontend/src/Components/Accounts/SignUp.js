import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";
import axios from "axios";
import { notify_success, notify_error } from "../Toaster";

class SignUp extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    company: "",
    password: "",
    dob: "",
  };
  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:8000/api/accounts/signup/", this.state)
      .then((response) => {
        console.log(response);
        notify_success(response.data.message);
        this.setState({
          first_name: "",
          last_name: "",
          email: "",
          address: "",
          company: "",
          password: "",
          dob: "",
        });
      })
      .catch((error) => {
        notify_error(error.response.data.message);
      });
  };
  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <MDBContainer className="mb-5 mt-5">
        <MDBRow>
          <MDBCol md="6" className="offset-md-3">
            <MDBCard>
              <MDBCardBody>
                <form className="needs-validation" onSubmit={this.submitHandler}>
                  <p className="h4 text-center py-4">Sign up</p>
                  <div className="grey-text">
                    <MDBInput
                      label="First name"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      name="first_name"
                      value={this.state.first_name}
                      onChange={this.changeHandler}
                      required
                    />
                    <MDBInput
                      label="Last name"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      name="last_name"
                      value={this.state.last_name}
                      onChange={this.changeHandler}
                      required
                    />
                    <MDBInput
                      label="Email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      name="email"
                      value={this.state.email}
                      onChange={this.changeHandler}
                      required
                    />
                    <MDBInput
                      label="Address"
                      icon="location-arrow"
                      group
                      type="textarea"
                      validate
                      error="wrong"
                      success="right"
                      name="address"
                      value={this.state.address}
                      onChange={this.changeHandler}
                      required
                    />
                    <MDBInput
                      label="Company"
                      icon="building"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      name="company"
                      value={this.state.company}
                      onChange={this.changeHandler}
                      required
                    />
                    <div class="md-form form-group">
                      <i data-test="fa" class="fa fa-calendar-alt prefix"></i>
                      <input
                        name="dob"
                        required=""
                        type="date"
                        class="form-control validate"
                        aria-disabled="false"
                        value={this.state.dob}
                        onChange={this.changeHandler}
                        required
                      ></input>
                    </div>
                    <MDBInput
                      label="Password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      name="password"
                      value={this.state.password}
                      onChange={this.changeHandler}
                      required
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn color="cyan" type="submit">
                      Register
                    </MDBBtn>
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

export default SignUp;
