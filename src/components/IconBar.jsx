import React, { useState } from 'react'
import '../css/IconBarStyle.css'
import { RiHotelBedFill } from 'react-icons/ri'
import { FaBusAlt, FaHiking, FaMap } from 'react-icons/fa'
import { HiArrowCircleLeft } from 'react-icons/hi'
import { AiFillCar, AiTwotoneShop, AiFillFlag, AiFillSchedule } from 'react-icons/ai'
import Image1IconBar from '../img/iconBar/image1IconBar.jpg'
import { NavLink } from 'react-router-dom'
import { Nav, Dropdown } from 'react-bootstrap'
import CardIconBar from './cardIconBar'
import DataIconBar from '../data/DataIconBar'


export default function IconBar() {
  const [activeCardIconBar, setActiveCardIconBar] = useState("Alojamiento");

  return (
    <>
      <div className='container titleIconBar'>
        <span> PLANIFICÁ TU VIAJE
        </span>
      </div>
      <div className='container containerBarraIcono p-0'>
        <div className="row barraIcono m-0">
          <div className="col d-flex flex-wrap justify-content-evenly nav d-inline d-none d-md-none d-lg-flex pe-0">
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
            <Nav.Link to="/" as={NavLink} onClick={() => setActiveCardIconBar("Mapas")} className="navLinkIconBar">
              <div className="ItemIconBar">
                <div className="IconStyleBar">
                  <FaMap />
                </div>
                <div className="tituloIcon text-center">
                  Mapas
                </div>
              </div>
            </Nav.Link>
          </div>

        </div>
        <div className="row barraIconoDropdown">
          <div className="col nav  d-block d-md-block d-lg-none d-xl-none d-xxl-none">
            <Dropdown>
              <Dropdown.Toggle className='dropDownStyleMobile w-100 mb-0' id="dropdown-basic">
                <span className='titleDropMobile'>Comenzá tu itinerario aquí</span>  <HiArrowCircleLeft className='titleDropMobileIcon' />
              </Dropdown.Toggle>

              <Dropdown.Menu className='w-100 text-center rounded-0 mt-0 p-0 dropDownStyleMobile'>
                <Dropdown.Item className='p-0 m-0'>
                  <Nav.Link to="/" as={NavLink} onClick={() => setActiveCardIconBar("Alojamiento")} className="navLinkIconBarMobile">
                    
                      <div className="tituloIconMobile">
                        <RiHotelBedFill className="IconStyleBarMobile" /><span className='ps-2'>Alojamiento</span> 
                      </div>
                    
                  </Nav.Link>
                </Dropdown.Item>
                <Dropdown.Divider className='m-0' />
                <Dropdown.Item className='p-0 m-0'>
                  <Nav.Link to="/" as={NavLink} onClick={() => setActiveCardIconBar("Transporte urbano")} className="navLinkIconBarMobile">                    
                      <div className="tituloIconMobile">
                        <FaBusAlt className="IconStyleBarMobile" /><span className='ps-2'>Transporte urbano</span> 
                      </div>                    
                  </Nav.Link>
                </Dropdown.Item>
                <Dropdown.Divider className='m-0' />
                <Dropdown.Item className='p-0 m-0'>
                  <Nav.Link to="/" as={NavLink} onClick={() => setActiveCardIconBar("Alquiler de autos")} className="navLinkIconBarMobile">                    
                      <div className="tituloIconMobile">
                        <AiFillCar className="IconStyleBarMobile" /><span className='ps-2'>Alguiler de autos</span> 
                      </div>                    
                  </Nav.Link>
                </Dropdown.Item>
                <Dropdown.Divider className='m-0' />
                <Dropdown.Item className='p-0 m-0'>
                  <Nav.Link to="/" as={NavLink} onClick={() => setActiveCardIconBar("Prestadores activos")} className="navLinkIconBarMobile">                    
                      <div className="tituloIconMobile">
                        <FaHiking className="IconStyleBarMobile" /><span className='ps-2'>Prestadores activos</span> 
                      </div>                    
                  </Nav.Link>
                </Dropdown.Item>
                <Dropdown.Divider className='m-0' />
                <Dropdown.Item className='p-0 m-0'>
                  <Nav.Link to="/" as={NavLink} onClick={() => setActiveCardIconBar("Agencias")} className="navLinkIconBarMobile">                    
                      <div className="tituloIconMobile">
                        <AiTwotoneShop className="IconStyleBarMobile" /><span className='ps-2'>Agencias</span> 
                      </div>                    
                  </Nav.Link>
                </Dropdown.Item>
                <Dropdown.Divider className='m-0' />
                <Dropdown.Item className='p-0 m-0'>
                  <Nav.Link to="/" as={NavLink} onClick={() => setActiveCardIconBar("Guias de turismo")} className="navLinkIconBarMobile">                    
                      <div className="tituloIconMobile">
                        <AiFillFlag className="IconStyleBarMobile " /><span className='ps-2'>Guías de turismo</span> 
                      </div>                    
                  </Nav.Link>
                </Dropdown.Item>
                <Dropdown.Divider className='m-0' />
                <Dropdown.Item className='p-0 m-0'>
                  <Nav.Link to="/" as={NavLink} onClick={() => setActiveCardIconBar("Itinerarios")} className="navLinkIconBarMobile">                    
                      <div className="tituloIconMobile">
                        <AiFillSchedule className="IconStyleBarMobile" /><span className='ps-2'>Itinerarios</span> 
                      </div>                    
                  </Nav.Link>
                </Dropdown.Item>
                <Dropdown.Divider className='m-0' />
                <Dropdown.Item className='p-0 m-0'>
                  <Nav.Link to="/" as={NavLink} onClick={() => setActiveCardIconBar("Mapas")} className="navLinkIconBarMobile">                    
                      <div className="tituloIconMobile">
                        <FaMap className="IconStyleBarMobile" /><span className='ps-2'>Mapas</span> 
                      </div>                    
                  </Nav.Link>
                </Dropdown.Item>
                
                
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        {activeCardIconBar === "Alojamiento" && <CardIconBar DataIconBar={DataIconBar} cardDataIndex={0} />}
        {activeCardIconBar === "Transporte urbano" && <CardIconBar DataIconBar={DataIconBar} cardDataIndex={1} />}
        {activeCardIconBar === "Alquiler de autos" && <CardIconBar DataIconBar={DataIconBar} cardDataIndex={2} />}
        {activeCardIconBar === "Prestadores activos" && <CardIconBar DataIconBar={DataIconBar} cardDataIndex={3} />}
        {activeCardIconBar === "Agencias" && <CardIconBar DataIconBar={DataIconBar} cardDataIndex={4} />}
        {activeCardIconBar === "Guias de turismo" && <CardIconBar DataIconBar={DataIconBar} cardDataIndex={5} />}
        {activeCardIconBar === "Itinerarios" && <CardIconBar DataIconBar={DataIconBar} cardDataIndex={6} />}
        {activeCardIconBar === "Mapas" && <CardIconBar DataIconBar={DataIconBar} cardDataIndex={7} />}
      </div>
    </>
  )
}
