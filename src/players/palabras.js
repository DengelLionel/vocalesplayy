import { NativeTypes } from 'react-dnd-html5-backend'
import { ItemTypes } from '../components/pruebadev/ItemTypes'




export const palabraCompleta=[
  {
    id:1,
    palabra:"CASA",
    img:"",
  }
]
export const Palabras1=[
{
  consonante:"C",
  accepts:"text", lastDroppedItem: null,
},
{
   accepts:[ItemTypes.VOCAL1, ItemTypes.VOCAL2,ItemTypes.VOCAL3,ItemTypes.VOCAL4,ItemTypes.VOCAL5, NativeTypes.URL], lastDroppedItem: null,
},
{
  consonante:"S",
  accepts:"text", lastDroppedItem: null,
},
{
  accepts:[ItemTypes.VOCAL1, ItemTypes.VOCAL2,ItemTypes.VOCAL3,ItemTypes.VOCAL4,ItemTypes.VOCAL5, NativeTypes.URL], lastDroppedItem: null,
}

]