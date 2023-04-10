import React from 'react'

const Subtitem = ({textoEntrada, valorIN, valorOut}) => {
  return (
    <div className='subitem_container'>
        <div>
            <p>NÚMERO</p>
            <p>{textoEntrada}</p>
        </div>
        <span>
            <p><span>{valorIN}</span>/{valorOut} kg</p>
        </span>
    </div>
  )
}

export default Subtitem