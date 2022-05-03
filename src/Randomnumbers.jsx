import React ,{useState} from 'react'


const Randomnumbers = () => {
    let [num,setNum]= useState(0)
    let random=()=>{
        setNum(Math.floor((Math.random()*100)))
    }
    return (
        <div>
           <h1>{num}</h1>
           <button onClick={random}>Randomnumbers</button> 
        </div>
    )
}

export default Randomnumbers
