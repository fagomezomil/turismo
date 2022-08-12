import React from "react";
import "./css/Header.css";
import { Button, FormControl, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import Logo from "./img/marcatucuman.svg";

export default function header() {
  return (
    <div className="container-fluid header-style">
      <div className="container Font">
        <div className="row alignBottom">
          <div className="col-9 col-xl-11 col-lg-10">
            <Navbar variant="light" className="Font" expand="xl">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link to="/" as={NavLink} className="px-3">
                    Inicio
                  </Nav.Link>
                  <Nav.Link to="/tucuman" as={NavLink} className="px-3">
                    Tucumán
                  </Nav.Link>
                  <Nav.Link to="/Planifica" as={NavLink} className="px-3">
                    Planificá
                  </Nav.Link>
                  <Nav.Link to="/Imperdibles" as={NavLink} className="px-3">
                    Imperdibles
                  </Nav.Link>
                  <Nav.Link to="/Naturaleza" as={NavLink} className="px-3">
                    Naturaleza
                  </Nav.Link>
                  <Nav.Link to="/historia-cultura" as={NavLink} className="px-3">
                    Historia y Cultura
                  </Nav.Link>
                  <Nav.Link to="/entretenimiento" as={NavLink} className="px-3">
                    Entretenimiento
                  </Nav.Link>
                  <Nav.Link to="/para-privados" as={NavLink} className="px-3">
                    Tucumán para privados
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
          <div className="col-3 col-xl-1 col-lg-2">
            <img src={Logo} alt="" className="logo-header" />
          </div>
          
        </div>
      </div>
    </div>
  );
}
