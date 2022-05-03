import React  from 'react'
import "./player.css"
const Player = (props) => {
    let{name,photo,runs}=props.playAttr
    
    return (
        <main>
            <figure>
                <img src={photo} alt={name} />
            </figure>
            <aside>
                <h2>{name}</h2>
                <p>total runs:{runs}</p>
            </aside>
        </main>
    )
}

export default Player
