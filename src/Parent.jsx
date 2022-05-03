import React from 'react'
import Child from './Child';

const Parent = (props) => {
    console.log(props)
    return (
        
        <div>
             <h1 style={{background:"yellow"}}>Im parent{props}</h1>
             <Child userName={props.userName}/>
        </div>
    )
}

export default Parent
