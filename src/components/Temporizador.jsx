import {  useState,useContext, useEffect } from 'react';
import { VocalContext } from '../context/VocalContextMain';
import { useFases } from '../hooks/useFases';
import moment from 'moment';
const TURN_DURATION= moment.duration(45,'seconds').asSeconds()
function Temporizador() {
   
    const {jugadorTemporizador,setJugadorTemporizador}=useContext(VocalContext)
  
    const {FaseOne,FaseTwo}=useFases(jugadorTemporizador)
    const HandleTurnoChange=()=>{
        const [currentTurno,setCurrentTurno]=useState()// obtenemos el turno actual
        const[numPlayer,setNumPlayer]=useState()  // obtenemos el número de jugadores
        const nextTurn=currentTurno===numPlayer-1?0:currentTurno+1;  // calculamos el turno siguiente
        setCurrentTurno({currentTurno:nextTurn,timeLeft:TURN_DURATION})
     
    }
    
    const [timeLeft, setTimeLeft] = useState(TURN_DURATION);

    useEffect(() => {
      
        FaseOne()
        FaseTwo()
      
        const interval = setInterval(() => {
            setTimeLeft(timeLeft => {
              if (timeLeft <= 0) {
               
                clearInterval(interval);
                return 0;
              }
              setJugadorTemporizador(timeLeft) 
              return timeLeft - 1;
            });
          }, 1000);
          return () => clearInterval(interval);
    }, [jugadorTemporizador]);

    return (
        <div className="text-[26px] flex justify-center items-center">
        <p className="text-white"> 0:{timeLeft} seconds</p>
      </div>
    
    );
}
export default Temporizador