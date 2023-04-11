import React from 'react'
import meses from '../../Data/meses'
import { MdSearch } from 'react-icons/md';


const BarraFiltros = () => {
  return (
    <div className='barraFiltros'>
        <span className='hideOn900'>Filtrar</span>
        <span>
            <input type="month" id="start" name="start"
            min="2022-03" value="2022-08"/>
       </span>
        <span>
            <ul>
            {meses.map((mes, index)=>{
                return(
                    <li key={index}>{mes}</li>

                )
            })}
            </ul>
        </span>
        <span>    
        <div className="input-wrapper">
            <input type="search" className="input" placeholder="Buscar"/>
            <MdSearch className="input-icon"/>
  
        </div>

        </span>
        </div>
  )
}

export default BarraFiltros