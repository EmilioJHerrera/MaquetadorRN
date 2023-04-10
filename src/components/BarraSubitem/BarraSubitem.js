import React from 'react'
import Subtitem from '../SubItem/Subtitem'

import { MdSyncAlt } from 'react-icons/md'

const BarraSubitem = () => {
  return (
    <section className='barraSubtiem_container'>
        <div className='barraSubitem_texto'>
            <p>Gestión de declaraciones</p>
            <p className='texto_bold'>ago 1, 2022 - ago 31,2022</p>
        </div>
        <div>
            <Subtitem 
            textoEntrada={'entrada'} 
            valorIN={'58'} valorOut={'691.526,00'}
            />
        </div>
        <div>
            <Subtitem 
            textoEntrada={'salida'} 
            valorIN={'0'} valorOut={'0,00'}
            />
        </div>
        <div className='export_link'>
            <MdSyncAlt className='icon_rotate'/>
            <span>Exportar todas las declaraciones a Excel</span>
        </div>
    </section>
  )
}

export default BarraSubitem