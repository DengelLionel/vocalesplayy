import React from 'react'
import PictureVocal from './PictureVocal'
const ContenedorVocal = ({Ref,board}) => {
  console.log("bor",board)
  return (
    <article ref={Ref} className='w-[150px] h-[150px] bg-purple-700 '>
      {board?.map((vocal)=>(<PictureVocal id={vocal.id} alt={vocal.vocal} src={vocal.img} />))}
      
    </article>
  )
}

export default ContenedorVocal