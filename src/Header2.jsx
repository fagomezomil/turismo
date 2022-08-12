import React from "react";
import "./css/Header.css";
import { Button, FormControl, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import Logo from "./img/marcatucuman.svg";


export default function header2() {
  return (
    <div className="container-fluid header-style ">
      <div className="container alignBottom">
        <div className="">
          <img src={Logo} alt="" className="logo-header" />
        </div>
        <div className="row">
          <div className="col-9 col-xl-12 col-lg-10 mt-4">
            <Navbar variant="light" className="font-navbar" expand="xl">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link to="/" as={NavLink} className="px-3 enlaceNav">
                    Inicio
                  </Nav.Link>
                  <Nav.Link to="/tucuman" as={NavLink} className="px-3 enlaceNav">
                    Tucumán
                  </Nav.Link>
                  <Nav.Link to="/Planifica" as={NavLink} className="px-3 enlaceNav">
                    Planificá
                  </Nav.Link>
                  <Nav.Link to="/Imperdibles" as={NavLink} className="px-3 enlaceNav">
                    Imperdibles
                  </Nav.Link>
                  <Nav.Link to="/Naturaleza" as={NavLink} className="px-3 enlaceNav">
                    Naturaleza
                  </Nav.Link>
                  <Nav.Link to="/historia-cultura" as={NavLink} className="px-3 enlaceNav">
                    Historia y Cultura
                  </Nav.Link>
                  <Nav.Link to="/entretenimiento" as={NavLink} className="px-3 enlaceNav">
                    Entretenimiento
                  </Nav.Link>
                  <Nav.Link to="/para-privados" as={NavLink} className="px-3 enlaceNav">
                    Tucumán para privados
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </div>
  );
}
