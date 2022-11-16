import React from 'react';
import '../css/bannerSection.css'

export default function BannerSection() {
  return (
    <div className="container bannerContainer ">
        <hr />
        <div className="row me-0 ms-0">
            <div className="col  d-none d-md-none d-lg-flex ps-0 pe-0">
                <img src="https://www.tucumanturismo.gob.ar/videos/aerolineasmdq-tuc.gif" alt="" className='img-fluid'/>
            </div>
            <div className="col d-flex d-md-flex d-lg-none banner">
              <p>Banner 220px alto</p>
            </div>
        </div>
        <hr />
    </div>
  );
}
