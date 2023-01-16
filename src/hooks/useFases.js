
export const useFases=(jugadorTemporizador)=>{
    /* const TempoPlayer=()=>{
        JSON.parse(localStorage.getItem('playerTurno'))?.map(e=>{
            
           
            localStorage.setItem('playerTurnoFaseOne',JSON.stringify([
            {id:e.id,player:e.player,turno:e.turno,fase_palabra:[
              {id:1,state:null,color:null,score:null,cronometro:jugadorTemporizador===0?0:"error"},
              {id:2,state:null,color:null,score:null,cronometro:45},
              {id:3,state:null,color:null,score:null,cronometro:45},
              {id:4,state:null,color:null,score:null,cronometro:45},
              {id:5,state:null,color:null,score:null,cronometro:45},
          
            ], nivel:"Nivel 1",
            score:0}
          ]))
        
             
        })
    } */
    const FaseOne=()=>{
        JSON.parse(localStorage.getItem('playerTurno'))?.map(e=> e.fase_palabra?.map(fase=>{
                if(e.id===1&&fase.id===1&&e.cronometro!==0){
                    localStorage.setItem('playerTurnoFaseOne',JSON.stringify([ /* Es cuando le toca el turno */
                    {id:e.id,player:e.player,turno:e.turno,fase_palabra:{id:1,state:null,color:"bg-red-700",score:null,cronometro:jugadorTemporizador===0?0:"error"},nivel:"Nivel 1",
                    score:0}
                    
                  ]))
                  
                }
            })  
        )
    }
    const FaseTwo=()=>{
        JSON.parse(localStorage.getItem('playerTurno'))?.map(e=>
            e.fase_palabra?.map(fase=>{
        if(e.id===2&&fase.id===2&&e.cronometro!==0){
                    JSON.parse(localStorage.getItem('playerTurnoOne'))?.map(one=>{
                        if(one.fase_palabra.cronometro===0){
                            localStorage.setItem('playerTurnoFaseTwo',JSON.stringify([ /* Es cuando le toca el turno */
                    {id:e.id,player:e.player,turno:e.turno,fase_palabra:{id:2,state:null,color:null,score:null,cronometro:jugadorTemporizador===0?0:"error"},nivel:"Nivel 1",
                    score:0}
                  ]))
                        }
                    })
                    
                }
            })  
        )
    }
    const FaseThree=()=>{

    }
    const FaseFour=()=>{

    }
    const FaseFive=()=>{

    }
    return{
    FaseOne,FaseTwo,FaseThree,FaseFour,FaseFive
    }
}