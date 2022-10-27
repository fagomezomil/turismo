// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'

import React, { useState } from "react";
import Tucuman from './pages/Tucuman.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Planifica from './pages/Planifica';
import Imperdibles from './pages/Imperdibles';
import Inicio from './pages/Inicio';
import Naturaleza from './pages/Naturaleza';
import HistoriaCultura from './pages/HistoriaCultura';
import SideNav from './components/SideNav';

// PARA SUMAR EL CLIMA
// https://www.npmjs.com/package/react-open-weather
// https://openweathermap.org/appid

function App() {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };
  return (
    <div className="App">
      <Router>

        {/* <Header/> */}
        <SideNav isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
        <Header/>
        <Routes>
          <Route exact path="/" element={<Inicio/>}/>
          <Route exact path="/tucuman" element={<Tucuman/>}/>
          <Route exact path="/planifica" element={<Planifica/>}/>
          <Route exact path="/imperdibles" element={<Imperdibles/>}/>
          <Route exact path="/naturaleza" element={<Naturaleza/>}/>
          <Route exact path="/historia-cultura" element={<HistoriaCultura/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
