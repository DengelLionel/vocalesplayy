import { Players } from "../players/Players"
import { useNavigate } from "react-router-dom"
export const useRegisterPlayer=()=>{
    const navigation=useNavigate()
    const Registrarse=(player1,player2,player3,player4)=>{
        Players?.map(e=>{
        
            
            if(e.id===1){
                e.player=player1
            }
            else if(e.id===2){
                e.player=player2
            }
            else if(e.id===3){
                e.player=player3
            }
            else if(e.id===4){
                e.player=player4
            }
            return e.id
        }).filter(id=>{
            if(id===1){
                    
                    navigation('/jugar')
                    document.location.reload()

            }
        })
        console.log("player",Players)
    }
    return{Registrarse}
}