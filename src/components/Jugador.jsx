import React, { useState } from 'react'
import Niveles from './Niveles'
import PalabrasCirculo from './PalabrasCirculo'
import { Players,PlayerPlay } from '../players/Players'
import { useEffect } from 'react'
import { useContext } from 'react'
import { VocalContext } from '../context/VocalContextMain'
import { usePintadoFases } from '../hooks/usePintadoFases'
const Jugador = () => {
    const {jugadorTemporizador,setJugadorTemporizador}=useContext(VocalContext)
    const {FasesTerminadas}=usePintadoFases()
 
    const JugadorTurno=()=>{
        
        
       
           
                Players?.map(turno=>{
                    if(turno.id===1){
                    turno.id=turno.id
                    turno.player=turno.player
                    turno.turno=`turno ${turno.id}`
                    const data=[ /* Es cuando le toca el turno */
                    {id:turno.id,player:turno.player,turno:`turno ${turno.id}`,fase_palabra:[
                      {id:1,state:null,color:null,score:null,cronometro:45},
                      {id:2,state:null,color:null,score:null,cronometro:45},
                      {id:3,state:null,color:null,score:null,cronometro:45},
                      {id:4,state:null,color:null,score:null,cronometro:45},
                      {id:5,state:null,color:null,score:null,cronometro:45},
                  
                    ], nivel:"Nivel 1",
                    score:0}
                  ]
                    if(turno.id&&turno.player!=null){
                        localStorage.setItem("playerTurno",JSON.stringify(data))
                    }
                  
                }
                })
              
           
       

       
    }
   
    useEffect(()=>{
        JugadorTurno()
        FasesTerminadas()
    },[])

  return (
   
<div className="container mx-auto px-4 sm:px-8">
    <div className="py-8">
        <div>
            <h2 className="text-2xl font-semibold leading-tight">Completa la Palabra con la Vocal correcta</h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                               TURNO
                            </th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                             NOMBRE
                            </th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                               PALABRAS
                            </th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                NIVEL
                            </th>
                            <th
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                               PUNTAJE
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {JSON.parse(localStorage.getItem('pintado'))?.map(play=>(
                                <tr key={play.id}>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                                    <div className="flex items-center">
                                        
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                               {play.turno}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap text-center">{play.player}</p>
                                </td>
                            
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <div className='flex flex-row gap-[10px]'>
                                {play.fase_palabra?.map(fase=>{
                                    return(
                                        <PalabrasCirculo key={fase.id}
                                         identificador={fase.id}
                                         colorFondo={fase.color}  />
                                    )
                                })}
                              </div>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5">
                                    <div className="flex items-center float-right">
                                        <div className="mr-3">
                                           <Niveles nivel={play.nivel}/>
                                        </div>
                                       
                                    </div>
                                </td>
    
                                <td className="px-5 py-5 border-b text-black border-gray-200 bg-white text-sm w-2/5">
                                <span>{play.score}</span>
                                </td>
                            </tr>
                            )
                           
                        )}
                        
                       
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
  )
}

export default Jugador