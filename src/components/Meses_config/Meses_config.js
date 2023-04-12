import React from 'react';
import { MdSettings } from 'react-icons/md';


const Meses_config = () => {
  return (
    <div className='meses_config_container'>
        <p>Meses abiertos <br/> a declaraciones</p>
        <p><MdSettings className='color-tuerca'/> Configurar</p>
    </div>
  )
}

export default Meses_config