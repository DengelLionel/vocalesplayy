import { useState } from 'react'
import React from 'react'
import PictureVocal from './PictureVocal'
import { Palabras } from '../players/Players'
import ContenedorVocal from './ContenedorVocal'
import { useDrop } from 'react-dnd'
const  vocales=[
    {id:1,vocal:"A",img:"https://panamapoesia.com/image/a2.png"},
    {id:2,vocal:"E",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwi39mTyuOt-Z3z9Sg0rob8u7UHhFWZ4LgFQztL-3Xt88PsNyrmnHyflKLwPn-7nYipgs&usqp=CAU"},
    {id:3,vocal:"I",img:"https://panamapoesia.com/image/i2.png"},
    {id:4,vocal:"O",img:"http://image.slidesharecdn.com/produciendorecursosmultimediavocales-141217095856-conversion-gate02/95/produciendo-recursos-multimedia-vocales-17-638.jpg?cb=1418810477"},
    {id:5,vocal:"U",img:"https://i.ytimg.com/vi/Vdi6fr331c4/hqdefault.jpg"},

]

const DragDrop = () => {
    const [vocal,setVocal]=useState(vocales)
    const [palabra,setPalabra]=useState(Palabras)
    const [board,setBoard]=useState([])
    const [{isOver},drop]=useDrop(()=>({
        accept:"image",
        drop:(item)=>addImageToBoard(item.id),
        collect:(monitor)=>({
            isOver:!!monitor.isOver()
          }),
    }))
    const addImageToBoard=(id)=>{
        const pictureList=palabra.filter((picture)=>id===picture.id)
        console.log("pic",pictureList)
        setBoard((board)=>[...board,pictureList])
    }
  return (
    <div>
        <section className='flex flex-row justify-center'>
            {vocal?.map(voc=>(<PictureVocal alt={voc.vocal} id={voc.id} src={voc.img} />))}
        </section>

        <section className='flex flex-row justify-center gap-4 mt-[40px]'>
        {palabra?.map(consonante=>consonante.palabraIncompleta?.map(incompleta=>
            incompleta.consonante==="_"?(<ContenedorVocal board={board} Ref={drop}/>):(<h1 className='text-[100px] text-white font-bold'>{incompleta.consonante}</h1>)
           
        ))}
        </section>
        <section ref={drop} className='w-full h-[200px] bg-blue-600 flex flex-row justify-center gap-4 mt-[40px]'>
        {board?.map((vocal)=>vocal?.map(vocc=>(<PictureVocal id={vocc.id} alt={vocc.vocal} src={vocc.img}  />)))}
        </section>

    </div>
  )
}

export default DragDrop