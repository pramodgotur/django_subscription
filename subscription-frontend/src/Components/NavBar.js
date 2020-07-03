import React from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink } from "mdbreact";

const Auth = {
  isAuthenticated: localStorage.getItem("token") ? true : false,
};

function UserNav() {
  return (
    <MDBNavbar color="indigo" dark expand="md">
      <MDBNavbarBrand>
        <strong className="white-text">Navbar</strong>
      </MDBNavbarBrand>
      <MDBNavbarNav left>
        <MDBNavItem active>
          <MDBNavLink to="/">Home</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="/signin">Sign Out</MDBNavLink>
        </MDBNavItem>
      </MDBNavbarNav>
    </MDBNavbar>
  );
}
function GuestNav() {
  return (
    <MDBNavbar color="indigo" dark expand="md">
      <MDBNavbarBrand>
        <strong className="white-text">Navbar</strong>
      </MDBNavbarBrand>
      <MDBNavbarNav left>
        <MDBNavItem>
          <MDBNavLink to="/signin">Sign In</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="/signup">Sign Up</MDBNavLink>
        </MDBNavItem>
      </MDBNavbarNav>
    </MDBNavbar>
  );
}

function NavBar() {
  console.log("in navbar.....", Auth.isAuthenticated);
  if (Auth.isAuthenticated === true) {
    return <UserNav />;
  } else {
    return <GuestNav />;
  }
}

export default NavBar;
