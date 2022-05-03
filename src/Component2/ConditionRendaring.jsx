import React, { useState } from 'react'

const ConditionRendaring = () => {
    let [isLoggin,setIsLoggedin]=useState(false);
    let [message,setMessage]=useState(['java','js','nodejs'])
    let AnonymousUser=()=>{
        return <button>logIn</button>
    }
    let AuthenticatedUser=()=>{
        return <button>logOut</button>
    }
    
    return (
        <div>
            {isLoggin?<AuthenticatedUser/>:<AnonymousUser/>}
        </div>
    )

    // 2nd way
    // let STATE=()=>{
    //     if(isLoggin===true){
    //         return <button>logIn</button>
    //     }
    //     else{
    //         return <button>logOut</button>
    //     }
    // 3rd way
    // switch (isLoggin){
    //     case true:
    //         return <button>logout</button>
    //     case false:
    //         return <button>login</button>
    //     default:
    //         return null    
    // }
    }
    

    

    
//     return(
//     <>
//         {/* {STATE()} */}
//         {message.length>0 && message.map((x,t)=>(
//             <ul key={t}>
//                 <li>{x}</li>
//             </ul>
//         ))}
//     </>
//     )
// }

export default ConditionRendaring
