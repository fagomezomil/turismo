import "../css/UpperBar.css";
import { FaSun } from "react-icons/fa";

// PARA SUMAR EL CLIMA
// https://www.npmjs.com/package/react-open-weather
// https://openweathermap.org/appid


export default function UpperBar() {
    // let date = new Date();

    return (
        <div className="container-fluid barrita">
            <div className="container">

                <div className="d-none d-md-none d-lg-inline-flex d-xl-inline-flex w-100 justify-content-between">
                    <div className="dateWeather">
                        {/* <span>   {date.toDateString()}  </span><FaSun className="colorSolcito"/> */}
                        <span className="ps-3">Hoy 14 de septiembre hay</span><FaSun className="colorSolcito"/> <span className="temperture pe-3">28°</span>
                    </div>
                    <div className=" phoneAdd">
                    <span>Comunicate y conocé Tucumán: +54-0381-4303644 | 4222199</span>
                    </div>
                </div>
                <div className="d-inline-flex d-md-inline-flex d-lg-none d-xl-none w-100 justify-content-between">
                    <div className="dateWeather">
                        {/* <span>   {date.toDateString()}  </span><FaSun className="colorSolcito"/> */}
                        <span className="ps-3">Hoy 14 de septiembre hay</span><FaSun className="colorSolcito"/> <span className="temperture pe-3">28°</span>
                    </div>
                    <div className=" phoneAdd">
                    <span>Contacto</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
