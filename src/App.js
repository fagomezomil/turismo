// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation.jsx';

import Artistas from './Artistas.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Coleccion from './Coleccion';
import Agregar from './Agregar';

function App() {
  return (
    <div className="App">
      <Router>

        < Navigation />
        <Routes>
          <Route exact path="/coleccion" element={<Coleccion/>}/>
          <Route exact path="/artistas" element={<Artistas/>}/>
          <Route exact path="/agregar" element={<Agregar/>}/>
        </Routes>  
      </Router>
    </div>
  );
}

export default App;
