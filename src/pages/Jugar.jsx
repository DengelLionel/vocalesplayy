import React from 'react'
import Jugador from '../components/Jugador'
import ArrastrarPalabras from '../components/ArrastrarPalabras'
import Temporizador from '../components/Temporizador'
import Prueba from '../components/pruebadev'
const Jugar = () => {
  return (
    <div>
      <Temporizador/>
      <Jugador/>
      <Prueba/>
    </div>
    
  )
}

export default Jugar