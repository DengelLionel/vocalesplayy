import update from 'immutability-helper'
import { memo, useCallback, useState,useEffect } from 'react'
import { NativeTypes } from 'react-dnd-html5-backend'
import { Box } from './Box'
import { Dustbin } from './Dustbin'
import { ItemTypes } from './ItemTypes'
import { Palabras,Palabras2 } from '../../players/palabras'
export const Container = memo(function Container() {
    const container={
        accepts: [ItemTypes.VOCAL1, ItemTypes.VOCAL2,ItemTypes.VOCAL3,ItemTypes.VOCAL4,ItemTypes.VOCAL5],
        lastDroppedItem: null,
      }
    
      console.log("Res",Palabras)
  const vacios=()=>{
      
           
      let valores =Palabras.map(cons=>cons.palabraIncompleta)
          let resul= valores.map(obj=>Object.values(obj).filter(consonante=>consonante.consonante==="_").length).reduce((acc,val)=>acc+val)
         
          let coleccion=[]
       
          for (let i=0;i<=resul-1;i++){
           coleccion.push({...container})

          } 
          console.log("cokec",coleccion)
          return coleccion
         
      }
      const Consonantes=()=>{
        
          let valores=Palabras.map(cons=>cons.palabraIncompleta)
          let resul= valores.map(obj=>Object.values(obj).filter(consonante=>consonante.consonante!=="_"))
          console.log("consonante",resul[0])
        return resul[0]
      }
      useEffect(()=>{
    
      },[])

    
  const [dustbins, setDustbins] = useState(Palabras2)

 
  const [boxes] = useState([
    {id:1,vocal:"A",img:"https://panamapoesia.com/image/a2.png",type:ItemTypes.VOCAL1},
        {id:2,vocal:"E",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwi39mTyuOt-Z3z9Sg0rob8u7UHhFWZ4LgFQztL-3Xt88PsNyrmnHyflKLwPn-7nYipgs&usqp=CAU",type:ItemTypes.VOCAL2},
        {id:3,vocal:"I",img:"https://panamapoesia.com/image/i2.png",type:ItemTypes.VOCAL3},
        {id:4,vocal:"O",img:"http://image.slidesharecdn.com/produciendorecursosmultimediavocales-141217095856-conversion-gate02/95/produciendo-recursos-multimedia-vocales-17-638.jpg?cb=1418810477",type:ItemTypes.VOCAL4},
        {id:5,vocal:"U",img:"https://i.ytimg.com/vi/Vdi6fr331c4/hqdefault.jpg",type:ItemTypes.VOCAL5},
  
  ])
  const [droppedBoxNames, setDroppedBoxNames] = useState([])
  function isDropped(boxName) {
    return droppedBoxNames.indexOf(boxName) > -1
  }
  const handleDrop = useCallback(
    (index,idItem) => {
     
      const { vocal} =idItem
     
      setDroppedBoxNames(
        update(droppedBoxNames, vocal ? { $push: [vocal] } : { $push: [] }),
      )
      setDustbins(
        update(dustbins, {palabraIncompleta:{
          [index]: {
            lastDroppedItem: {
              $set:idItem,
            },
          },
        } 
         
        }),
      )
    /*   setDustbins(
        update(dustbins, {
          [index]: {
            lastDroppedItem: {
              $set: item,
            },
          },
        }),
      ) */
    },
    [droppedBoxNames, dustbins],
  )
  console.log("p2",Palabras2)
  console.log("dfaf",dustbins)
  return (
    <div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
        {boxes.map(({ vocal, type,img,alt }, index) => (
          <Box
            src={img}
            alt={alt}
            name={vocal}
            type={type}
            isDropped={isDropped(vocal,img)}
            key={index}
          />
        ))}
      </div>

      <div style={{ overflow: 'hidden', clear: 'both',display:'flex',flexDirection:'row',gap:'170px' }}>
          
        {dustbins.map((e) =>e.palabraIncompleta.map((inc)=>{ 
            console.log("acccc",inc.accepts)
          return(
          <Dustbin
            accept={inc.consonante!==String&&inc.consonante}
            lastDroppedItem={inc.lastDroppedItem}
            onDrop={(idItem)=> handleDrop(inc.index, inc.idItem)}
            consonante={inc.consonante===String&&inc.consonante}
            key={inc.index}
          />
        )}))}
       {/*  {dustbins.map(({ accepts, lastDroppedItem }, index) => (
         
         <Dustbin
           accept={accepts}
           lastDroppedItem={lastDroppedItem}
           onDrop={(item) => handleDrop(index, item)}
           consonante={Consonantes()}
           key={index}
         />
       ))}  */}
      </div>

      
    </div>
  )
})
