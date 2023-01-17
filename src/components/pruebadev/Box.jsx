import { memo } from 'react'
import { useDrag } from 'react-dnd'
const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}
export const Box = memo(function Box({ name, type, isDropped,src,alt }) {
  const [{ opacity,isDragging }, drag] = useDrag(
    () => ({
      type,
      item: { name },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
        isDragging:!!monitor.isDragging()
      }),

    }),
    [name, type],
  )
  return (
    <div ref={drag} style={{ ...style, opacity }} data-testid="box">
      {isDropped ? <s>{name} xd</s> : name}
      <img  className={`w-[150px] h-[150px] ${isDragging?'border-solid border-[12px] border-yellow-500':'border-none border-0 border-transparent'}`} loading='lazy' src={src} alt={alt} />
    </div>
  )
})
