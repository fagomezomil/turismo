import React from 'react'
import { Carousel } from 'react-bootstrap'
import '../css/productosInicio.css'
import img1 from '../img/productosInicio/bgTitleProductos.JPG'


export default function ProductosInicio() {
  return (
    <div className='container'>
      <div className=" row m-0 p-0">
        <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 pt-3 mb-4">
          <p className='titleProductosInicio'>
            Te invitamos a conocer nuestras  <br /> <strong> Rutas temáticas y Productos</strong>
          </p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam laboriosam voluptates perspiciatis qui, vel neque perferendis quasi expedita cumque sint corporis doloremque, omnis numquam possimus aut beatae aspernatur repellendus! Accusamus a perspiciatis saepe odio asperiores, alias impedit?</p>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5  ">
          <Carousel className=''>
            <Carousel.Item>
              <img
                className="d-block img-fluid"
                src={img1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
           
          </Carousel>
        </div>
      </div>
    </div>
  )
}
