import React, { useState,useRef } from 'react'
import {DndProvider} from "react-dnd"
import {HTML5Backend} from "react-dnd-html5-backend"

import DragDrop from './DragDrop'
const ArrastrarPalabras = () => {
 
  const [vocal1,setVocal1]=useState()
    const [vocal2,setVocal2]=useState()
    const refVocal1=useRef()
    const refVocal2=useRef() 

  
  return (
    <DndProvider backend={HTML5Backend}>
      <DragDrop/>
    </DndProvider>
  )
}

export default ArrastrarPalabras