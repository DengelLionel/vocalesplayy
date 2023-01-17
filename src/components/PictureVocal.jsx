import React from 'react'
import { useDrag } from 'react-dnd'
const PictureVocal = ({alt,src,id}) => {
  const [{isDragging},drag]=useDrag(()=>({
    type:"image",
    item:{id:id},
    collect:(monitor)=>({
      isDragging:!!monitor.isDragging()
    }),
  }))
  return (
    <img ref={drag} className={`w-[150px] h-[150px] ${isDragging?'border-solid border-[12px] border-yellow-500':'border-none border-0 border-transparent'}`} loading='lazy' src={src} alt={alt} />
  )
}

export default PictureVocal