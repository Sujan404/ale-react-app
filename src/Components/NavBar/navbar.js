import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Offcanvas,
  Container,
} from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import logo from "../../assets/react.png";
import contactImg from "../../assets/contact-mail.png";
import "./navbar.css";

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="React Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar">
          <Nav className="ms-auto">
            <Nav.Link as={ScrollLink} to="home" className="desktopMenuListItem">
              Home
            </Nav.Link>
            <Nav.Link
              as={ScrollLink}
              to="about"
              className="desktopMenuListItem"
            >
              About Me
            </Nav.Link>
            <Nav.Link
              as={ScrollLink}
              to="portfolio"
              className="desktopMenuListItem"
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              as={ScrollLink}
              to="clients"
              className="desktopMenuListItem"
            >
              Clients
            </Nav.Link>
          </Nav>
          <a variant="outline-success" className="desktopMenuBtn text-decoration-none ml-aut">
                <img
                  src={contactImg}
                  alt="Contact Image"
                  className="desktopMenuImg"
                />
                Contact Me
              </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
