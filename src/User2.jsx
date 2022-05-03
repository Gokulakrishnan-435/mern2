import React from 'react'

const User2 = (props) => {
    console.log(props);
    return (
        <div>
            <h1 style={{background:"green"}}>im grand child{props.userName}</h1>
        </div>
    )
}

export default User2
