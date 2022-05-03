import React ,{useState} from 'react'
import Player from './Player';
import JSON from "../players.json"
const PlayerComponent = () => {
    
    let [play,setPlay]=useState(JSON)
  
    return (
        <div id="playerBlock">
            {play.map(data =>{
                return <Player key="{data.id}" playAttr={data}/>
            })}
        </div>
    )
}

export default PlayerComponent
