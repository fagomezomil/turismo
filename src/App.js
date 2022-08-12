// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.jsx';
import Header2 from './Header2.jsx'

import React, { useState } from "react";
import Tucuman from './Tucuman.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Planifica from './Planifica';
import Imperdibles from './Imperdibles';
import Inicio from './Inicio';
import Naturaleza from './Naturaleza';
import HistoriaCultura from './HistoriaCultura';
import SideNav from './components/SideNav';


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
        <Header2/>
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
