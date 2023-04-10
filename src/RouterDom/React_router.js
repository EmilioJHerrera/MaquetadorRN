import React from 'react';
import {
    BrowserRouter as Router,
    
    Route,
    Routes
  } from "react-router-dom";
  
  
import Inicio from '../pages/Inicio'
  
import Declaraciones from '../pages/Declaraciones';
import Instalaciones from '../pages/Instalaciones'
import Alertas from '../pages/Alertas';
import Financiacion from '../pages/Financiacion';
import Informes from '../pages/Informes';




const React_router = () => {
  return (
    
    // <Router>
    <Routes>
        <Route exact path="/" element={<Inicio/>} />
        <Route path="/Declaraciones" element={<Declaraciones/>} />
        <Route path="/Instalaciones" element={<Instalaciones/>} />
        <Route path="/Incidencias/Alertas" element={<Alertas/>} />
        <Route path="/Financiación" element={<Financiacion/>} />
        <Route path="/Informes" element={<Informes/>} />
        
     </Routes>   


  
// </Router>
  )
}

export default React_router