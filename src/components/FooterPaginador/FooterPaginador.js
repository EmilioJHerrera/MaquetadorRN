//pequeña lógica para otorgarle dinamismo al maquetado

import React, { useState } from 'react'

const FooterPaginador = () => {
  
    const botones = [1,2,3,4,5];
    const [contador, setContador] = useState(0);
  
    return (
    <> 
        {botones.map((boton, index)=>{
            return(
                <span key={index}
                onClick={()=>{setContador(index)}}
                className={contador==index?'activo':'noactivo'}
                >{boton}</span>
            )
        })}
           </>
  )
}

export default FooterPaginador