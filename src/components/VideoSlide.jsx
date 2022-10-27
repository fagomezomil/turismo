import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Video1 from '../video/video.mp4'
// import Slide2 from '../img/slide/slide2.jpg'
// import Slide3 from '../img/slide/slide3.jpg'
import "../css/videoSlideStyle.css"

function VideoSlide() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel fade activeIndex={index} controls={false} indicators={false} onSelect={handleSelect} className="zDown">
      <Carousel.Item>
        <video
          autoPlay loop muted
          className="videoContainer"
          src={Video1}
          alt="First slide"
        />

        <div className='container textVideo'> <p>Tucumán te espera con mucha aventura!</p>
        <div className="highlight">
        <span className='downTextVideo'>Encontrá en nuestra provincia todas las opciones para divertirte.</span>
        </div>
        <button>Mas info</button>
        </div>


      </Carousel.Item>
      <Carousel.Item >
        <video
          autoPlay loop muted
          className="videoContainer"
          src={Video1}
          alt="First slide"
        />


        <div className='container textVideo text-end'> 
        <p>Vení con todas las ganas!</p>
        <div className="">
        <span className='downTextVideo'>Vas a conocer una provincia dispuesta a recibirte.</span>
        </div>
        <button>Mas info</button>
        </div>


      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default VideoSlide;
