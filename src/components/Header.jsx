import React from "react";
import "../css/Header.css";
import NavBarNormal from "./NavBarNormal";
import NavBarCollapes from "./NavBarCollapes";
import UpperBar from "./UpperBar"
import Logo from "../img/marcatucuman.svg";
import facebook from "../img/header/facebook.svg"
import ig from "../img/header/ig.svg"
import twiter from "../img/header/twiter.svg"





export default function header() {

  return (
    <>
    <UpperBar />
    <div className="container-fluid header-style ">
      <div className="container">
        <div className="row justify-content-between justify-content-md-between  justify-content-xl-around">
          <div className="col col-xl-9 col-lg-9 d-none d-md-none d-lg-none d-xl-block navbar-menu-extended mx-0 w-auto">
            <NavBarNormal />
          </div>
          <div className=" col-sm-4 col-md-7 col-lg-8 d-none d-md-block d-lg-block d-xl-none"></div>
          <div className="col-2 social-media d-none d-md-none d-lg-none d-xl-none d-xxl-block w-auto">
            <div className="social-container">
              <p>Sumate</p>
              <div className="social-icons">
                <img src={facebook} alt="" />
                <img src={ig} alt="" />
                <img src={twiter} alt="" />
              </div>
            </div>
          </div>
          <div className="col-1 w-auto d-none d-md-none d-lg-none d-xl-block d-xxl-block">
            <img src={Logo} alt="" className="logo-header" />
          </div>
        </div>


        <div className="row position-relative">
          <div className="col d-block d-md-block d-lg-block d-xl-none mt-4 mb-3 w-auto">
            <NavBarCollapes />
          </div>
          <div className="col-12 col-sm-12 col-md-12 d-md-block d-lg-block d-xl-none d-xxl-none position-absolute">
            <div className="row social-media me-4 ">
              <div className="col-10 col-sm-11">
                <p>Sumate</p>
                <div className="social-icons">
                  <img src={facebook} alt="" />
                  <img src={ig} alt="" />
                  <img src={twiter} alt="" />
                </div>
              </div>
              <div className="col-2 col-sm-1">
                <img src={Logo} alt="" className="logo-header" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div >
    </>
  );
}

