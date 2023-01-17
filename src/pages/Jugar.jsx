import React from 'react'
import Jugador from '../components/Jugador'
import ArrastrarPalabras from '../components/ArrastrarPalabras'
import Temporizador from '../components/Temporizador'

const Jugar = () => {
  return (
    <div>
      <Temporizador/>
      <Jugador/>
      <ArrastrarPalabras/>
   
    </div>
    
  )
}

export default Jugar