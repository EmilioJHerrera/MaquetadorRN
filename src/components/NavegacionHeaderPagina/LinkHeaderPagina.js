import React from 'react'
import { MdEdit } from 'react-icons/md';
import { MdUploadFile } from 'react-icons/md';
import { MdHistory } from 'react-icons/md';

const LinkHeaderPagina = ({icon,name}) => {
  
  const icons = [{icon: MdEdit, name: 'Crear'}, 
                  { icon: MdUploadFile, name: 'Subir archivo'},
                   {icon: MdHistory, name: 'Histórico de archivos'}];

  return (
    <div className='linkHeader_container'>  
         {icons.map((Icon, i) => (
         <li key={i} className='link_icon'>
            <Icon.icon size={16}/>
            <p>{Icon.name}</p>
         </li>
      ))}
    </div>
  )
}

export default LinkHeaderPagina