export const usePintadoFases=()=>{
    const FasesTerminadas=()=>{
        let Datafases=[]
        
        const defaultt=JSON.parse(localStorage.getItem('playerTurno'))
        const playerTurnoOne=JSON.parse(localStorage.getItem('playerTurnoFaseOne'))
        playerTurnoOne.map(faseOne=>{
            if(faseOne.fase_palabra.cronometro===0){
                Datafases=[ {id:faseOne.id,player:faseOne.player,turno:faseOne.turno,fase_palabra:[
                    faseOne.fase_palabra,
                      {id:2,state:null,color:null,score:null,cronometro:45},
                      {id:3,state:null,color:null,score:null,cronometro:45},
                      {id:4,state:null,color:null,score:null,cronometro:45},
                      {id:5,state:null,color:null,score:null,cronometro:45},
                  
                    ], nivel:"Nivel 1",
                    score:0}]
                    localStorage.setItem('pintado',JSON.stringify(Datafases))
                    return Datafases
            }else{
                Datafases=defaultt
                localStorage.setItem('pintado',JSON.stringify(Datafases))
                return Datafases
            }
            
        /* {fase_palabra:[faseOne.fase_palabra,faseTwo.fase_palabra]} */
    
   
    
})
    }
    return{FasesTerminadas}
}