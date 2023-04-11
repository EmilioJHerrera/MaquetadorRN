import React from 'react'

const FooterPaginador = () => {
  
    const botones = [1,2,3,4,5];
  
    return (
    <> 
        {botones.map((boton, index)=>{
            return(
                <span key={index}
                >{boton}</span>
            )
        })}
           </>
  )
}

export default FooterPaginador