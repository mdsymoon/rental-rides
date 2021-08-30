import React from "react";
import "./Navigation.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../../Images/rental rides.png";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="p-3">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" style={{ width: "" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto ">
            <Nav.Link href="#home" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="text-white">
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
