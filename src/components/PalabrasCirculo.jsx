import React from 'react'

const PalabrasCirculo = ({colorFondo,identificador}) => {
  return (
    <div key={identificador} className={`rounded-full ${colorFondo===null?'border-2 border-solid border-blue-700 ':colorFondo}  w-[20px] h-[20px]`}></div>
  )
}

export default PalabrasCirculo