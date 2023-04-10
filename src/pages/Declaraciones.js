import React from 'react'
import BarraFiltros from '../components/BarraFiltros/BarraFiltros'
import BarraSubitem from '../components/BarraSubitem/BarraSubitem'
import HeaderPagina from '../components/HeaderPagina/headerPagina'
import ItemListTableHead from '../components/ItemListDeclaraciones/ItemListTableHead'
import LinkHeaderPagina from '../components/NavegacionHeaderPagina/LinkHeaderPagina'
import HeaderPaginaData from '../Data/headerPaginaData'

import declaracionesData from '../Data/declaracionesData'
import ItemListDeclaraciones from '../components/ItemListDeclaraciones/ItemListDeclaraciones'
import FooterPaginacion from '../components/FooterPaginacion/FooterPaginacion'
import Meses_config from '../components/Meses_config/Meses_config'

const Declaraciones = () => {
  return (
    <div>
    <div className='container'>
      <section className='intro-container'>
        <div>
        {HeaderPaginaData.map((item)=>{
          return(
            <HeaderPagina 
            titulo={item.titulo} 
            textoLN={item.textoLN}
            textoLN1={item.textoLN1}
            textoLN2={item.textoLN2}/> 
          )
        }
        )}
        </div>
        <div>
          <Meses_config/>
        </div>
      </section>
      <section>
        <LinkHeaderPagina/>
      </section>
   </div>
    
      <div className='informacion-container'>
      <section className='barrafiltro-container'>
        <BarraFiltros/>
      </section>
      <div>
        <BarraSubitem/>
      </div>
      <section>
        <table className='table-container'>
        <ItemListTableHead/>
        {declaracionesData.map((item)=>{
          // item = {referencia, tipo, cantidad, origen, fecha, oleoso}
          return(
            <ItemListDeclaraciones 
            referencia={item.referencia}
            tipo={item.tipo}
            cantidad={item.cantidad} 
            origen={item.origen} 
            fecha={item.fecha} 
            oleoso={item.oleoso}
            
            />
          )
        })}
        </table>
      </section>
      
        <section>
        <FooterPaginacion/>
        </section>
      </div>
    </div>
  
  )
}

export default Declaraciones