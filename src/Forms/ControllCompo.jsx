// import React, { Component } from 'react';

// class Controllcompo extends Component {
//     state={
//         username : "",
//         password : "",
//     }
//     handleChange=e=>{
//         let{name,value}=e.target;
//         this.setState({[name]:value})
//     }
//     handleSubmit=e=>{
//         e.preventDefault();
//         let {username,password}=this.state;
//         console.log({username,password});
//     }
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <div><input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleChange}  /></div>
//                     <div><input type="password" placeholder="password" value={this.state.password} name="password"
//                     onChange={this.handleChange} /></div>
//                     <div>
//                         <button onChange={this.handleSubmit} >Submit</button>
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }

// export default Controllcompo;

import React ,{useState,useRef} from 'react'
const ControllCompo = () => {
    let [state,setState]=useState({username:"",password:""})
    let handleChange=e=>{
        let {name,value}=e.target;
        setState({...state,[name]:value})
    }
    let handleSubmit=e=>{
        e.preventDefault();
        console.log({username,password});
    }
    let{username,password}=state
 
    return (
        <div>
              <form onSubmit={handleSubmit}>
                     <div><input type="text" placeholder="username" name="username" value={username} onChange={this.handleChange}  /></div>
                    <div><input type="password" placeholder="password" value={password} name="password"
                    onChange={handleChange} /></div>
                    <div>
                        <button onChange={handleSubmit} >Submit</button>
                    </div>
                </form>
        </div>
    )
}

export default ControllCompo



// import React ,{useState,Fragment} from 'react'
// import JSON from "./country.json"


// const ControllCompo = () => {
// let [country,setCountry]=useState(JSON)
// let [state,setState]=useState(null)
// let handleChange=e=>{
//     let {name,value}=e.target;
//     setState({[name]:value})
// }

// let handleSubmit=e=>{
//     e.preventDefault();
//     console.log(state);
// }
//     return (
//         <div>
//             <form  onSubmit={handleSubmit}>
//                 <select name="country" value={state} onChange={handleChange}>
//                 {country.map(c=>(
//                     <Fragment key={c.code}>
//                         <option value={c.code}>{c.name}</option></Fragment>
//                 )
//                     )}
                    
//                 </select>
//                 <div onChange={handleChange}>
//                     <input type="radio"  value="male" name="gender" />Male
//                     <input type="radio"  value="Female" name="gender" />Female
//                 </div>
//                 <button>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default ControllCompo


// radio 


// import React ,{useState} from 'react'

// const ControllCompo = () => {
//     let [state,setState]=useState("gokul")
//     let handleChange=e=>{
//         let{name,value}=e.target;
        
//             setState({[name]:value})
        
        
//     }
//     let handleSubmit=e=>{
//         e.preventDefault();
//         console.log(state);
//     }
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//             <div onChange={handleChange}>
//                     <input type="radio"  value="male" name="gender" />Male
//                      <input type="radio"  value="Female" name="gender" />Female
//                  </div>
                
//                  <div onChange={handleChange}>
//                      <textarea name="Feedback"  cols="30" rows="10"></textarea>
//                  </div>
//                  <button>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default ControllCompo


// checkbox
// import React,{useState} from 'react'

// const ControllCompo = () => {
//     let [state,setState]=useState([]);
//     let handleChange=e=>{
//                 let{name,value}=e.target;
                
//                     setState({...state,[name]:value})
                
                
//             }
//     let handleSubmit=e=>{
//         e.preventDefault();
//         console.log(state);
//     }
//     return (
//         <div>
//             <form onSubmit={handleSubmit} >
//             <div onChange={handleChange}>
//                <input type="checkbox" name="Skils1" value="java"  />JAVA
//                <input type="checkbox" name="Skil2" value="JAVASCRIPT"  />JAVASCRIPT
//                      <input type="checkbox" name="Skil3" value="PYTHON"  />PYTHON
//                     <input type="checkbox" name="Skil4" value="NODE JS"  />NODE JS
//                      <input type="checkbox" name="Skil5" value="SQL"  />SQL
//                      <input type="checkbox" name="Skils6" value="MANGODB"  />MANGODB
//                      <input type="checkbox" name="Skil7" value="REACT JS"  />REACT JS
//                   </div>
//                   <button>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default ControllCompo
