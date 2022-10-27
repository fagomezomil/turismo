import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function NavBarNormal() {
    return (
        <>
            <Navbar variant="light" className="font-navbar" expand="xl">
                <Nav className="navigation me-auto">
                    <Nav.Link to="/" as={NavLink} className="text-center px-3 enlaceNav mt-4 mt-lg-0">
                        Inicio
                    </Nav.Link>
                    <Nav.Link to="/tucuman" as={NavLink} className="text-center px-3 enlaceNav mt-3 mt-lg-0">
                        <NavDropdown title="Tucumán" className="mt-0 enlace-nav-nounderline">
                            <NavDropdown.Item className="enlaceNav-dropdown">Ubicación</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className="enlaceNav-dropdown">Destinos y circuitos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className="enlaceNav-dropdown">Preguntas frecuentes</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Link>
                    <Nav.Link to="/Planifica" as={NavLink} className="text-center px-3 enlaceNav mt-3 mt-lg-0">
                        <NavDropdown title="Planificá" className="mt-0 enlace-nav-nounderline">
                            <NavDropdown.Item className="enlaceNav-dropdown">Alojamiento</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className="enlaceNav-dropdown">Transporte urbano</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className="enlaceNav-dropdown">Alquiler de autos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className="enlaceNav-dropdown">Prestadores de turismo activo</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className="enlaceNav-dropdown">Agencias</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className="enlaceNav-dropdown">Guías de turismo</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className="enlaceNav-dropdown">Itinerarios</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Link>
                    <Nav.Link to="/Imperdibles" as={NavLink} className="text-center px-3 enlaceNav mt-3 mt-lg-0">
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
                    <Nav.Link to="/Naturaleza" as={NavLink} className="text-center px-3 enlaceNav mt-3 mt-lg-0">
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
                    <Nav.Link to="/historia-cultura" as={NavLink} className="text-center px-3 enlaceNav mt-3 mt-lg-0">
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
                    <Nav.Link to="/entretenimiento" as={NavLink} className="text-center px-3 enlaceNav mt-3 mt-lg-0">
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
                    <Nav.Link to="/para-privados" as={NavLink} className="text-center px-3 enlaceNav mt-3 mt-lg-0">
                        Para privados
                    </Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}
