import React from 'react'
import { MdNotificationsActive, MdUpdate } from 'react-icons/md';
import { MdFileOpen } from 'react-icons/md';
import { MdMoreVert } from 'react-icons/md';
import { MdSyncAlt } from 'react-icons/md'





const ItemListTableHead = ({referencia, tipo, cantidad, origen, fecha, oleoso}) => {
  return (
    <tr>
        <th>
         <label>
            <input type="checkbox" id="cbox1" value="first_checkbox"/> 
            referencia
            <MdSyncAlt className='icon_rotate'/>
         </label> 
        </th>
        <th>
           tipo 
           <MdSyncAlt className='icon_rotate'/>
        </th>
        <th>
           cantidad 
           <MdSyncAlt className='icon_rotate'/>
        </th>
        <th className='mayus'>
           origen 
           <MdSyncAlt className='icon_rotate'/>
        </th>
        <th>
           fecha 
           <MdSyncAlt className='icon_rotate'/>
        </th>
        <th>
           %oleoso
           <MdSyncAlt className='icon_rotate'/> 
        </th>
        <th>
         Incidencia
        </th>
        <th>
           
        </th>
        <th>
            Acciones
            
        </th>
    </tr>
  )
}

export default ItemListTableHead