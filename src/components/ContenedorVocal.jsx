import React from 'react'
import PictureVocal from './PictureVocal'
const ContenedorVocal = ({Ref,board}) => {
  console.log("bor",board)
  return (
    <article ref={Ref} className='w-[150px] h-[150px] bg-purple-700 '>
      {board?.map((vocal)=>vocal?.map(vocc=>(<PictureVocal id={vocc.id} alt={vocc.vocal} src={vocc.img} />)))}
      
    </article>
  )
}

export default ContenedorVocal