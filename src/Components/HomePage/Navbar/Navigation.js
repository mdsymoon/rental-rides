import React, { useContext } from "react";
import "./Navigation.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../../Images/rental rides.png";
import { Link } from "react-router-dom";
import { UserContext } from "./../../../App";

const Navigation = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const handleLogOut = () => {
    setLoggedInUser({});
  };
  return (
    <Navbar expand="lg" className="p-3">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" style={{ width: "" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto ">
            <Link to="/" className="navbar-link">
              Home
            </Link>
            <Link to="/dashboard/hiredCar" className="navbar-link">
              Dashboard
            </Link>
            <Link to="/" className="navbar-link">
              Contact
            </Link>
            {loggedInUser.email ? (
              <Link to="/" className="navbar-link" onClick={handleLogOut}>
                Log out
              </Link>
            ) : (
              <Link to="/login" className="navbar-link">
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
