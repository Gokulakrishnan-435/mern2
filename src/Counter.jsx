// import React, { Component } from 'react';

// class Counter extends Component {
//     state={
//         count=0
//     };
//     increment=()=>{
//         this.setState({count: this.state.count+1});
//     decrement=()=>{
//         this.setState({count: this.state.count+1});
//     };
//     reset=()=>{
//         this.setState({count:0})
//     };}
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={{increment}}>Increment</button>
//                 <button onClick={{decrement}}>Decrement</button>
//                 <button onClick={{reset}}>Reset</button>
//             </div>
//         );
//     }
// }

// export default Counter;

import React, { useState } from 'react'

export const counter = () => {
    let [count,setCount]= useState(0);
    let increment=()=>{
        setCount(count+1);
    }
    let decrement=()=>{
        setCount(count-1);
    }
    let reset=()=>{
        setCount(0);
    }
    return (
        <div>
            <h1>{useState}</h1>
            <button onClick={{increment}}>Increment</button>
             <button onClick={{decrement}}>Decrement</button>
                <button onClick={{reset}}>Reset</button>
        </div>
    )
}
