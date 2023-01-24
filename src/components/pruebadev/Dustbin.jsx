import { memo } from 'react'
import { useDrop } from 'react-dnd'

import { useEffect } from 'react'
import { useState } from 'react'

const style = {
  height: '12rem',
  width: '12rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  backgroundColor:"red",
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
}
export const Dustbin = memo(function Dustbin({
  accept,
  lastDroppedItem,
  onDrop,
  consonante
}) {
 const [vocale,setVocale]=useState({})


/*   let newState={...vocale}

  setVoc(newState&&newState) */

  useEffect(()=>{
    if (document.getSelection().rangeCount === 0) {
      
    console.log("vocals",vocale)
  
      return;
    }
    
  },[vocale])
 
  const [{ isOver, canDrop }, drop] = useDrop({
    accept:accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })
  const isActive = isOver && canDrop
  let backgroundColor = 'white'
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }
  


  return (
    <div>
     
    <div  ref={drop}  style={{...style, backgroundColor }} data-testid="dustbin">
          
             
             {lastDroppedItem ? (
               <section>
                  <section className="bg-sky-700 w-[150px]">
              {/*  <p>Last dropped: {JSON.stringify(lastDroppedItem)}</p> */}
               <input disabled={true}  className='text-[80px] bg-transparent w-[80px] font-extrabold text-white' onChange={()=>setVocale({
                ...vocale,[lastDroppedItem.name]:lastDroppedItem.name}
               )} value={lastDroppedItem.name} type="text" />
       
               </section>
       
       
               </section>
              
             ):(
              <h2  className='text-black font-extrabold text-[80px]'>{consonante}</h2>
             )}
           </div>
           </div>
        
 
   
  )
})
   