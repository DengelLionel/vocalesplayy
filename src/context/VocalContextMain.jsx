import { createContext, useState } from "react";
export const VocalContext=createContext();
const VocalContextMain=({children})=>{
    const [playerOne,setPlayerOne]=useState(null)
    const [playerTwo,setPlayerTwo]=useState(null)
    const [playerThree,setPlayerThree]=useState(null)
    const [playerFour,setPlayerFour]=useState(null)
    const [jugadorTemporizador,setJugadorTemporizador]=useState(45)
const data={
    playerOne,setPlayerOne,playerTwo,setPlayerTwo,playerThree,setPlayerThree,playerFour,setPlayerFour,jugadorTemporizador,setJugadorTemporizador
}
return(
    <VocalContext.Provider value={data}>{children}</VocalContext.Provider>
)
}
export default VocalContextMain