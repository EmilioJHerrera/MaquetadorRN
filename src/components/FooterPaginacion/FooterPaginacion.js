import React from 'react'

import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { MdArrowBackIos } from 'react-icons/md';
import { MdNotificationsActive, MdUpdate } from 'react-icons/md';
import FooterPaginador from '../FooterPaginador/FooterPaginador';
import declaracionesData from '../../Data/declaracionesData';


const FooterPaginacion = () => {
  return (
    <section className='footer_container'>
        <div>
            <p>Mostrando 1 a {declaracionesData.length} de 46 declaraciones</p>
        </div>
        <div>
            <span>
                <MdArrowBackIos/>
                <MdArrowBackIos/>
            </span>
            <span>
                <MdArrowBackIos/>
            </span>
            <span>
                <FooterPaginador/>
            </span>
            <span>
                <MdOutlineArrowForwardIos />
            </span>
            <span>
                <MdOutlineArrowForwardIos />
                <MdOutlineArrowForwardIos />
            </span>
            <span>

            <select name="paginacion" id="pages">
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
            </select>
            </span>
        </div>
        <div>
            <p><MdNotificationsActive className='color_notificacion_pendiente'/> Notificación pendiente</p>
            <p><MdUpdate className='color_notificacion_espera'/> Notificación en espera</p>
        </div>
    </section>
  )
}

export default FooterPaginacion