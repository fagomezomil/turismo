import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function NavBarCollapes() {
    return (
        <>
            <Navbar variant="light" className="nav-style" expand="xl">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" data-bs-auto-close="true">
                    <Nav className="navigation me-auto">
                        <Nav.Link to="/" as={NavLink} className="text-center px-3 enlaceNav mt-4 mt-lg-0 mb-md-1 pb-md-1 pt-md-1">
                            Inicio
                        </Nav.Link>
                        <Nav.Link to="/tucuman" as={NavLink} className="text-center px-3 enlaceNav mt-3 mt-lg-0 mb-md-1 pb-md-1 pt-md-1">
                            <NavDropdown title="Tucumán" className="mt-0 enlace-nav-nounderline mb-md-1 pb-md-1 pt-md-1">
                                <NavDropdown.Item className="enlaceNav-dropdown text-sm-center text-md-center">Ubicación</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="enlaceNav-dropdown text-sm-center text-md-center">Destinos y circuitos</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="enlaceNav-dropdown text-sm-center text-md-center">Preguntas frecuentes</NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Link>
                        <Nav.Link to="/Planifica" as={NavLink} className="text-center px-3 enlaceNav mt-3 mt-lg-0 mb-md-1 pb-md-1 pt-md-1">
                            <NavDropdown title="Planificá" className="mt-0 enlace-nav-nounderline mb-md-1 pb-md-1 pt-md-1">
                                <NavDropdown.Item className="enlaceNav-dropdown text-sm-center text-md-center">Alojamiento</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="enlaceNav-dropdown text-sm-center text-md-center">Transporte urbano</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="enlaceNav-dropdown text-sm-center text-md-center">Alquiler de autos</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="enlaceNav-dropdown text-sm-center text-md-center">Prestadores de turismo activo</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="enlaceNav-dropdown text-sm-center text-md-center">Agencias</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="enlaceNav-dropdown text-sm-center text-md-center">Guías de turismo</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="enlaceNav-dropdown text-sm-center text-md-center">Itinerarios</NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Link>
                        <Nav.Link to="/Imperdibles" as={NavLink} className="text-center px-3 enlaceNav mt-3 mt-lg-0 mb-md-1 pb-md-1 pt-md-1">
                            <NavDropdown title="Imperdibles" className="mt-0 enlace-nav-nounderline">
                                <NavDropdown.Item className="enlaceNav-dropdown">Destinos</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="enlaceNav-dropdown">Espectáculos permanentes</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="enlaceNav-dropdown">Eventos destacados</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="enlaceNav-dropdown">Productos turístitcos</NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Link>
                        <Nav.Link to="/Naturaleza" as={NavLink} className="text-center px-3 enlaceNav mt-3 mt-lg-0 mb-md-1 pb-md-1 pt-md-1">
                            <NavDropdown title="Naturaleza" className="mt-0 enlace-nav-nounderline">
                                <NavDropdown.Item className="enlaceNav-dropdown">Áreas protegidas</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="enlaceNav-dropdown">Aventura por aire</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="enlaceNav-dropdown">Aventura por tierra</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="enlaceNav-dropdown">Aventura por agua</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="enlaceNav-dropdown">Aire libre</NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Link>
                        <Nav.Link to="/historia-cultura" as={NavLink} className="text-center px-3 enlaceNav mt-3 mt-lg-0 mb-md-1 pb-md-1 pt-md-1">
                            <NavDropdown title="Historia y cultura" className="mt-0 enlace-nav-nounderline">
                                <NavDropdown.Item className="enlaceNav-dropdown">Ciudad histórica</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="enlaceNav-dropdown">Museos y Salas culturales</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="enlaceNav-dropdown">Arqueología</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="enlaceNav-dropdown">Fiestas y festivales</NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Link>
                        <Nav.Link to="/entretenimiento" as={NavLink} className="text-center px-3 enlaceNav mt-3 mt-lg-0 mb-md-1 pb-md-1 pt-md-1">
                            <NavDropdown title="Entretenimiento" className="mt-0 enlace-nav-nounderline">
                                <NavDropdown.Item className="enlaceNav-dropdown">Con niños</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="enlaceNav-dropdown">Ferias</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="enlaceNav-dropdown">Privados</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="enlaceNav-dropdown">Shoppings</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="enlaceNav-dropdown">Gastronomía</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="enlaceNav-dropdown">Peñas</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="enlaceNav-dropdown">Cines y teatros</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="enlaceNav-dropdown">Agenda</NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Link>
                        <Nav.Link to="/para-privados" as={NavLink} className="text-center px-3 enlaceNav mt-3 mt-lg-0 mb-md-1 pb-md-1 pt-md-1">
                            Tucumán para privados
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
