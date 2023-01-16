import {  useState,useContext, useEffect } from 'react';
import { VocalContext } from '../context/VocalContextMain';
import { useFases } from '../hooks/useFases';
function Temporizador() {
    const SECOND = 1000;

    const parsedDeadline = 45000;
    const {jugadorTemporizador,setJugadorTemporizador}=useContext(VocalContext)
    const [time, setTime] = useState(45000);
    const {FaseOne,FaseTwo}=useFases(jugadorTemporizador)
    
    


    useEffect(() => {
      
        FaseOne()
        FaseTwo()
        
        const interval = setInterval(
            () => setTime((time)=>time===0?0:time-SECOND),
            1000,
        );

        return () => clearInterval(interval);
    }, [jugadorTemporizador]);

    return (
        <div className="timer">
            {Object.entries({
              
                Seconds: (time / SECOND),
            }).map(([label, value]) =>{
              setJugadorTemporizador(value) 
                return(
                <div key={label} className="text-[26px] flex justify-center items-center">
                    <div className="text-white">
                        <p>{value===0?0:`00:${value}`}</p>
                        <span  className="text">{label}</span>
                     
                    </div>
                </div>
            )}
            )}
        </div>
    );
}
export default Temporizador