import React from 'react'
import { NavLink } from "react-router-dom";

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

            {navData.map((itemLink)=>{
                return(

            <NavLink
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
            <p>Incidencias</p>
            <p>perfil</p>
            <p>loguot</p>
        </div>

        
    </nav>
  )
}

export default NavBar