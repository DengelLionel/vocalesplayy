import React, { useState,useRef,useEffect } from 'react'
import {DragDropContext,Droppable,Draggable} from "@hello-pangea/dnd"
import { Palabras } from '../players/Players'
const ArrastrarPalabras = () => {
  const  palabraIncompleta=[
    {id:"1",consonante:"C"},
    {id:"2",consonante:"_"},
    {id:"3",consonante:"S"},
    {id:"4",consonante:"_"},
]
  const [vocal1,setVocal1]=useState()
    const [vocal2,setVocal2]=useState()
    const refVocal1=useRef()
    const refVocal2=useRef() 
   const [palabras,setPalabras]=useState(Palabras)
   const [palabraa,setPalabraa]=useState(palabraIncompleta)
  return (
  
 
  <DragDropContext onDragEnd={(result)=>console.log(result)}>
    <div>
    {palabras.map(vocal=>
      vocal.vocales.map((voc,index)=>(
        <span key={index} className='text-white text-[70px] p-4 uppercase w-[70px]'>{voc.vocal}</span>
      ))
     )}
    
    
      <Droppable droppableId='tasks'>
        {(droppableProvided)=>(
           <div
            {...droppableProvided.droppableProps}
             ref={droppableProvided.innerRef}
              className='flex flex-row gap-[10px] mt-[50px] items-center justify-center'>
           {palabras.map(palabraa=>
            palabraa.palabraIncompleta?.map((incompleta,index)=>(
          <Draggable key={incompleta.id} draggableId={incompleta.id} index={index}>
            {(draggableProvided)=>(
          <span
           {...draggableProvided.draggableProps} 
           ref={draggableProvided.innerRef}
            {...draggableProvided.dragHandleProps} 
            className='text-white text-[70px] uppercase w-[70px]'>{incompleta.consonante}</span>)}
                
                </Draggable>
              )
            ))}
          
           {droppableProvided.placeholder}
       </div>
        )
        }
     
    </Droppable>
    </div>
    </DragDropContext> 
    
  )
}

export default ArrastrarPalabras