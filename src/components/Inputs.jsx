import React from 'react'
import { useContext } from 'react'
import { VocalContext } from '../context/VocalContextMain'
import { useRegisterPlayer } from '../hooks/useRegisterPlayer'

const Inputs = () => {
    const { playerOne,setPlayerOne,playerTwo,setPlayerTwo,playerThree,setPlayerThree,playerFour,setPlayerFour}=useContext(VocalContext)
    const {Registrarse}=useRegisterPlayer()
  return (
<div class="flex justify-center items-center flex-col gap-[10px]">
        
        <div>
          
            <input value={playerOne} onChange={(e)=>setPlayerOne(e.target.value)}  type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Jugador 1" />
        </div> 

        <div>
          
          <input value={playerTwo} onChange={(e)=>setPlayerTwo(e.target.value)} type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Jugador 2" />
      </div>  

      <div>
          
            <input value={playerThree} onChange={(e)=>setPlayerThree(e.target.value)} type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Jugador 3" />
        </div>  

        <div>
          
            <input value={playerFour} onChange={(e)=>setPlayerFour(e.target.value)} type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Jugador 4" />
        </div>   
       
        <button
        onClick={()=>Registrarse(playerOne,playerTwo,playerThree,playerFour)}
        type="submit"
        className="  bg-indigo-500 w-[300px] text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline outline-none"
      >Iniciar</button>   
     

       


      
      
    </div>
  )
}

export default Inputs