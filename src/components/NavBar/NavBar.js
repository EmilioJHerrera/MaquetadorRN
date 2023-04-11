import React from 'react'
import { NavLink } from "react-router-dom";
import IndicidenciasIcon from '../Navbar_icons/IndicidenciasIcon';
import PerfilIcon from '../Navbar_icons/PerfilIcon';
import LogoutIcon from '../Navbar_icons/LogoutIcon';



const NavBar = () => {
  const navData = [
    {route: '/',
    nombre: 'Inicio'},
    {route: '/Declaraciones',
    nombre: 'Declaraciones'},
    {route: '/Instalaciones',
    nombre: 'Instalaciones'},
    {route: '/Incidencias/Alertas',
    nombre: 'Incidencias/Alertas'},
    {route: '/Financiación',
    nombre: 'Financiación'},
    {route: '/Informes',
    nombre: 'Informes'},
]
  
    return (
    <nav className='navBar-container'>

        <div>
            LOGO
        </div>

        <div>

            {navData.map((itemLink,index)=>{
                return(

            <NavLink
                key={index}
                to={itemLink.route}
                className={({ isActive }) =>
                    isActive ? "active" : "noActive"
                }
                >
                {itemLink.nombre}
            </NavLink>
                )
            })}
        </div>

        <div className='menu_derecho'>
            <IndicidenciasIcon/>
            <PerfilIcon/>
            <LogoutIcon/>
        </div>

        
    </nav>
  )
}

export default NavBar