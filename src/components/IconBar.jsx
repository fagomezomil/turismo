import React, { useState } from 'react'
import '../css/IconBarStyle.css'
import { RiHotelBedFill } from 'react-icons/ri'
import { FaBusAlt, FaHiking } from 'react-icons/fa'
import { AiFillCar, AiTwotoneShop, AiFillFlag, AiFillSchedule } from 'react-icons/ai'
import Image1IconBar from '../img/iconBar/image1IconBar.jpg'
import { NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import CardIconBar from './cardIconBar'
import DataIconBar from '../data/DataIconBar'


export default function IconBar() {
  const [activeCardIconBar, setActiveCardIconBar] = useState("Alojamiento");

  return (
    <>
      <div className='container titleIconBar'>
        <span> Planifica tu viaje</span>
      </div>
      <div className='container containerBarraIcono p-0'>
        <div className="row barraIcono">
          <div className="col d-flex flex-wrap justify-content-evenly nav d-inline d-none d-md-none d-lg-flex">
            <Nav.Link to="/" as={NavLink} onClick={() => setActiveCardIconBar("Alojamiento")} className="navLinkIconBar">
              <div className="ItemIconBar">
                <div className="IconStyleBar">
                  <RiHotelBedFill />
                </div>
                <div className="tituloIcon">
                  Alojamiento
                </div>
              </div>
            </Nav.Link>
            <Nav.Link to="/" as={NavLink} onClick={() => setActiveCardIconBar("Transporte urbano")} className="navLinkIconBar">
              <div className="ItemIconBar">
                <div className="IconStyleBar">
                  <FaBusAlt />
                </div>
                <div className="tituloIcon">
                  Transporte urbano
                </div>
              </div>
            </Nav.Link>
            <Nav.Link to="/" as={NavLink} onClick={() => setActiveCardIconBar("Alquiler de autos")} className="navLinkIconBar">
              <div className="ItemIconBar">
                <div className="IconStyleBar">
                  <AiFillCar />
                </div>
                <div className="tituloIcon">
                  Alquiler de autos
                </div>
              </div>
            </Nav.Link>
            <Nav.Link to="/" as={NavLink} onClick={() => setActiveCardIconBar("Prestadores activos")} className="navLinkIconBar">
              <div className="ItemIconBar">
                <div className="IconStyleBar">
                  <FaHiking />
                </div>
                <div className="tituloIcon">
                  Prestadores Activos
                </div>
              </div>
            </Nav.Link>
            <Nav.Link to="/" as={NavLink} onClick={() => setActiveCardIconBar("Agencias")} className="navLinkIconBar">
              <div className="ItemIconBar">
                <div className="IconStyleBar">
                  <AiTwotoneShop />
                </div>
                <div className="tituloIcon">
                  Agencias
                </div>
              </div>
            </Nav.Link>
            <Nav.Link to="/" as={NavLink} onClick={() => setActiveCardIconBar("Guias de turismo")} className="navLinkIconBar">
              <div className="ItemIconBar">
                <div className="IconStyleBar">
                  <AiFillFlag />
                </div>
                <div className="tituloIcon">
                  Guías de turismo
                </div>
              </div>
            </Nav.Link>
            <Nav.Link to="/" as={NavLink} onClick={() => setActiveCardIconBar("Itinerarios")} className="navLinkIconBar">
              <div className="ItemIconBar">
                <div className="IconStyleBar">
                  <AiFillSchedule />
                </div>
                <div className="tituloIcon">
                  Itinerarios
                </div>
              </div>
            </Nav.Link>
          </div>

        </div>
        <div className="row barraIconoDropdown">
          <div className="col nav  d-block d-md-block d-lg-none d-xl-none d-xxl-none">
            <div className="dropdown">
              <div className="btn btn-secondary dropdown-toggle w-100" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
              </div>

              <ul className="dropdown-menu w-100" aria-labelledby="dropdownMenuLink">
              <Nav.Link to="/" as={NavLink} onClick={() => setActiveCardIconBar("Alojamiento")} className="navLinkIconBar">
              <div className="ItemIconBar">
                <div className="IconStyleBar">
                  <RiHotelBedFill />
                </div>
                <div className="tituloIcon">
                  Alojamiento
                </div>
              </div>
            </Nav.Link>
            <Nav.Link to="/" as={NavLink} onClick={() => setActiveCardIconBar("Transporte urbano")} className="navLinkIconBar">
              <div className="ItemIconBar">
                <div className="IconStyleBar">
                  <FaBusAlt />
                </div>
                <div className="tituloIcon">
                  Transporte urbano
                </div>
              </div>
            </Nav.Link>
            <Nav.Link to="/" as={NavLink} onClick={() => setActiveCardIconBar("Alquiler de autos")} className="navLinkIconBar">
              <div className="ItemIconBar">
                <div className="IconStyleBar">
                  <AiFillCar />
                </div>
                <div className="tituloIcon">
                  Alquiler de autos
                </div>
              </div>
            </Nav.Link>
            <Nav.Link to="/" as={NavLink} onClick={() => setActiveCardIconBar("Prestadores activos")} className="navLinkIconBar">
              <div className="ItemIconBar">
                <div className="IconStyleBar">
                  <FaHiking />
                </div>
                <div className="tituloIcon">
                  Prestadores Activos
                </div>
              </div>
            </Nav.Link>
            <Nav.Link to="/" as={NavLink} onClick={() => setActiveCardIconBar("Agencias")} className="navLinkIconBar">
              <div className="ItemIconBar">
                <div className="IconStyleBar">
                  <AiTwotoneShop />
                </div>
                <div className="tituloIcon">
                  Agencias
                </div>
              </div>
            </Nav.Link>
            <Nav.Link to="/" as={NavLink} onClick={() => setActiveCardIconBar("Guias de turismo")} className="navLinkIconBar">
              <div className="ItemIconBar">
                <div className="IconStyleBar">
                  <AiFillFlag />
                </div>
                <div className="tituloIcon">
                  Guías de turismo
                </div>
              </div>
            </Nav.Link>
            <Nav.Link to="/" as={NavLink} onClick={() => setActiveCardIconBar("Itinerarios")} className="navLinkIconBar">
              <div className="ItemIconBar">
                <div className="IconStyleBar">
                  <AiFillSchedule />
                </div>
                <div className="tituloIcon">
                  Itinerarios
                </div>
              </div>
            </Nav.Link>
              </ul>
            </div>
          </div>
        </div>
        {activeCardIconBar === "Alojamiento" && <CardIconBar DataIconBar={DataIconBar} cardDataIndex={0} />}
        {activeCardIconBar === "Transporte urbano" && <CardIconBar DataIconBar={DataIconBar} cardDataIndex={1} />}
        {activeCardIconBar === "Alquiler de autos" && <CardIconBar DataIconBar={DataIconBar} cardDataIndex={2} />}
        {activeCardIconBar === "Prestadores activos" && <CardIconBar DataIconBar={DataIconBar} cardDataIndex={3} />}
        {activeCardIconBar === "Agencias" && <CardIconBar DataIconBar={DataIconBar} cardDataIndex={4} />}
        {activeCardIconBar === "Guias de turismo" && <CardIconBar DataIconBar={DataIconBar} cardDataIndex={5} />}
        {activeCardIconBar === "Itinerarios" && <CardIconBar DataIconBar={DataIconBar} cardDataIndex={6} />}
      </div>
    </>
  )
}
