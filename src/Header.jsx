import React from "react";
import "./css/Header.css";
import { Button, FormControl, Form } from "react-bootstrap";
import {  NavLink } from "react-router-dom";
import { Nav, Navbar, Container} from 'react-bootstrap';
import Logo from "./img/marcatucuman.svg";

export default function header() {
  return (
    <div>
      <div className="container-fluid header-style Font">
        <div className="row">
          <div className="col-10">
            <Navbar variant="light" className="Font" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link to="/" as={NavLink} className="px-5">
                    Inicio
                  </Nav.Link>
                  <Nav.Link to="/tucuman" as={NavLink} className="px-5">
                    Tucumán
                  </Nav.Link>
                  <Nav.Link to="/Planifica" as={NavLink} className="px-5" >
                    Planificá
                  </Nav.Link>
                  <Nav.Link to="/Imperdibles" as={NavLink} className="px-5" >
                    Imperdibles
                  </Nav.Link>
                  <Nav.Link to="/Naturaleza" as={NavLink} className="px-5" >
                    Naturaleza
                  </Nav.Link>
                  <Nav.Link to="/historia-cultura" as={NavLink} className="px-5" >
                    Historia y Cultura
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>

          <div className="col-2">
            <img src={Logo} alt="" className="logo-header" />
          </div>
        </div>
      </div>
    </div>
  );
}
