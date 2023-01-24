import update from 'immutability-helper'
import { memo, useCallback, useState,useEffect } from 'react'

import { Box } from './Box'
import { Dustbin } from './Dustbin'
import { ItemTypes } from './ItemTypes'
import { Palabras1 } from '../../players/palabras'
export const Container = memo(function Container() {
    const container={
        accepts: [ItemTypes.VOCAL1, ItemTypes.VOCAL2,ItemTypes.VOCAL3,ItemTypes.VOCAL4,ItemTypes.VOCAL5],
        lastDroppedItem: null,
      }
    
    


    
  const [dustbins, setDustbins] = useState(Palabras1)

 
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
    (index,item) => {
     
      const { vocal} =item
     
      setDroppedBoxNames(
        update(droppedBoxNames, vocal ? { $push: [vocal] } : { $push: [] }),
      )
    
       setDustbins(
        update(dustbins, {
          [index]: {
            lastDroppedItem: {
              $set: item,
            },
          },
        }),
      ) 
    },
    [droppedBoxNames, dustbins],
  )


  return (
    <div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
        {boxes.map(({ vocal, type,img,alt }, index) => (
          <Box
            src={img}
            alt={alt}
            name={vocal}
            type={type}
            isDropped={isDropped(vocal)}
            key={index}
          />
        ))}
      </div>

      <div style={{ overflow: 'hidden', clear: 'both',display:'flex',flexDirection:'row',gap:'17px' }}>
          
      {dustbins.map(({ accepts, lastDroppedItem,consonante }, index) => (
         
         <Dustbin
           accept={accepts&&accepts}
           lastDroppedItem={lastDroppedItem}
           onDrop={(item) => handleDrop(index, item)}
           consonante={consonante}
           key={index}
         />
       ))} 

     

      </div>

      
    </div>
  )
})
