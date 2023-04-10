import React from 'react'
import { MdNotificationsActive, MdUpdate } from 'react-icons/md';
import { MdFileOpen } from 'react-icons/md';
import { MdMoreVert } from 'react-icons/md';
import { MdSyncAlt } from 'react-icons/md'





const ItemListDeclaraciones = ({referencia, tipo, cantidad, origen, fecha, oleoso}) => {
  return (
    <tr className='mayus'>
        <td>
         <label>
            <input type="checkbox" id="cbox1" value="first_checkbox"/> 
            {referencia}
         </label> 
        </td>
        <td>
           {tipo} 
        </td>
        <td>
           {cantidad} 
        </td>
        <td >
           {origen} 
        </td>
        <td>
           {fecha} 
        </td>
        <td>
           {oleoso} 
        </td>
        <td>
         <MdNotificationsActive/> 0
         < MdUpdate/> 0
        </td>
        <td>
            <MdFileOpen color='#1677AB'/>
            <span className='link_verPDF'>Ver PDF</span>
        </td>
        <td>
            <MdMoreVert />
            
        </td>
    </tr>
  )
}

export default ItemListDeclaraciones