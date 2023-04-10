import React from 'react'

const HeaderPagina = ({titulo,textoLN,textoLN1,textoLN2}) => {
  return (
    <div className='header-container'>
        <h2>{titulo}</h2>
        <p>{textoLN}</p>
        <p>{textoLN1}</p>
        <p>{textoLN2}</p>
    </div>
  )
}

export default HeaderPagina