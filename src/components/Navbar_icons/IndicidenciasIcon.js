import React from 'react'
import { MdNotificationsActive} from 'react-icons/md';
const IndicidenciasIcon = () => {
  return (
    <span>
        <MdNotificationsActive/>
        Indicidencias
        <progress
        max="100"
        value="50" 
        className='indicadorProgreso'></progress>
        
        </span>
  )
}

export default IndicidenciasIcon