import { NativeTypes } from 'react-dnd-html5-backend'
import { ItemTypes } from '../components/pruebadev/ItemTypes'
const container={
  accepts: [ItemTypes.VOCAL1, ItemTypes.VOCAL2,ItemTypes.VOCAL3,ItemTypes.VOCAL4,ItemTypes.VOCAL5, NativeTypes.URL],
  lastDroppedItem: null,
}
export const Palabras2=[
  {id:1,
  fase:1,
  palabraCompleta:"CASA",
  palabraIncompleta:[
      {id:1,consonante:"C"},
      {id:2,index:0,idItem:1, consonante: [ItemTypes.VOCAL1, ItemTypes.VOCAL2,ItemTypes.VOCAL3,ItemTypes.VOCAL4,ItemTypes.VOCAL5, NativeTypes.URL],
        lastDroppedItem: null},
      {id:3,consonante:"S"},
     
      {id:4,index:1,idItem:2,consonante: [ItemTypes.VOCAL1, ItemTypes.VOCAL2,ItemTypes.VOCAL3,ItemTypes.VOCAL4,ItemTypes.VOCAL5, NativeTypes.URL],
        lastDroppedItem: null},
     
  ],

  vocales:[
      {id:"1",vocal:"A"},
      {id:"2",vocal:"A"},    
  ]
  }
]

export const Palabras=[
  {id:1,
  fase:1,
  palabraCompleta:"CASA",
  palabraIncompleta:[
      {id:1,consonante:"C"},
      {id:2,consonante:"_"},
      {id:3,consonante:"S"},
      {id:4,consonante:"_"},

     
  ],
  vocales:[
      {id:"1",vocal:"A"},
      {id:"2",vocal:"A"},    
  ]
  }
]
export const Palabras3=[
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