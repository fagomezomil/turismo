import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../css/calendario.css'

function CalendarioActividades() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='container'>
            <div className="tituloCalendarioContainer d-flex align-items-lg-center">
                <span className='titleCalendario me-3'>Agendá estas actividades</span> <button className='btnActividades'>Ver más actividades</button>
            </div>
            <p className='bajadaCalendario mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, reiciendis dicta. Impedit, maxime explicabo at praesentium, atque consequuntur ratione est ea sequi nisi.</p>
            <Carousel swipeable={false}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px">
                <div className='itemCalendario me-2'>
                    <span>17 Nov</span>
                    <p>Neo Workshop Federal</p>
                    <img src="https://www.tucumanturismo.gob.ar/carga/image/729f182b-654d-40d3-b808-4f99d7b8216d.jpg" alt="" className='img-fluid' />
                </div>
                <div className='itemCalendario me-2'>
                    <span>19 Nov</span>
                    <p>1er Encuentro de Bandoneones</p>
                    <img src="https://www.tucumanturismo.gob.ar/carga/image/edd03d24-a580-4947-ad0f-ab98a3517c28.jpg" alt="" className='img-fluid' />
                </div>
                <div className='itemCalendario me-2'>
                    <span>20 Nov</span>
                    <p>XVIII Encuentro de Copleros</p>
                    <img src="https://www.tucumanturismo.gob.ar/carga/image/2022-encuentro-coopleros-XVIII.jpeg" alt="" className='img-fluid' />
                </div>
                <div className='itemCalendario me-2'>
                    <span>26 Nov</span>
                    <p>Primavera para todos 2022</p>
                    <img src="https://www.tucumanturismo.gob.ar/carga/image/WhatsApp%20Image%202022-11-10%20at%2009.10.15.jpeg" alt="" className='img-fluid' />
                </div>

            </Carousel>
        </div>
    )
}

export default CalendarioActividades