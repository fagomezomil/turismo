import Image1IconBar from '../img/iconBar/image1IconBar.jpg'
import '../css/cardIconBar.css'

const CardIconBar = ({DataIconBar, cardDataIndex}) => {
    return (
        <div>
            {DataIconBar[cardDataIndex].map(item =>( 

        <div key={cardDataIndex} className="row m-0 p-0">
          <div className="col-12 col-lg-5 pe-0 ps-0 containerCard">
            <p className='titleIconItemBar text-center text-md-start'>{item.title}</p>
            <p className='textIconItemBar'>{item.text}</p>
            <button className=''>Encontrá toda la información aquí</button>
            </div>

          <div className="col-lg-7 imageItemBar">
            {/* <img src={Image1IconBar} alt="" className='img-fluid' /> */}
          </div>
        </div>
        
            ))}
            </div>
    );
};          

export default CardIconBar;