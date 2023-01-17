import { memo } from 'react'
import { useDrop } from 'react-dnd'
import { Palabras } from '../../players/Players'
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
  src,
  alt
}) {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
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
  console.log("ojo",lastDroppedItem)
  return (
    <div ref={drop}  style={{ ...style, backgroundColor }} data-testid="dustbin">
            {/*  {isActive
               ? 'Release to drop'
               : `This dustbin accepts: ${accept.join(', ')}`} */}
       
             {lastDroppedItem && (
               <section>
                  <section className="bg-sky-700 w-[150px]">
              {/*  <p>Last dropped: {JSON.stringify(lastDroppedItem)}</p> */}
               <h1 className='text-[80px] font-extrabold text-white'>{lastDroppedItem.name}</h1>
       
               </section>
       
       
               </section>
              
             )}
           </div>
 
   
  )
})
   /* <div>
       
      <section className='flex flex-row justify-center gap-4 mt-[40px]'>
        {Palabras?.map(consonante=>consonante.palabraIncompleta?.map(incompleta=>
            incompleta.consonante==="_"?(<p>hola</p>):(<h1 className='text-[100px] text-white font-bold'>{incompleta.consonante}</h1>)
           
        ))}
        </section>
    </div> */