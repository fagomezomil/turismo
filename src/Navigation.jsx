import React from 'react'
import { Nav, Navbar, Container} from 'react-bootstrap';
import './App.css';
import {  NavLink } from "react-router-dom";



export default function Navigation() {
  return (
    <div >
        
      <Navbar variant="dark" className='Nav-Style Font' expand="lg">
 
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/coleccion" as={NavLink} className='btn-celeste px-5'>Colección</Nav.Link>
              <Nav.Link to="/artistas" as={NavLink} className='btn-rojo px-5'>Artistas</Nav.Link>
              <Nav.Link to="/agregar" as={NavLink} className='btn-verde px-5'>Agregar</Nav.Link>
            </Nav>
          </Navbar.Collapse>

      </Navbar>
    </div>
  )
}
