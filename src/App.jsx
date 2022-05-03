// import React, { Component } from 'react';
// import App1 from './App1';
// class App extends Component {

//    state={emp:[
//        {empName:"Gokul",empId: "111",empAge:21,empSalary:30000,designation:"software developer",empPlace:"Neyveli"},
//         {empName:"krishnan",empId: "222",empAge:22,empSalary:40000,designation:"Project manager",empPlace:"Banglore"},
//         {empName:"Guru",empId: "333",empAge:24,empSalary:50000,designation:"java trainer",empPlace:"Mangalore"},
//        {empName:"Guna",empId: "444",empAge:27,empSalary:60000,designation:"python trainer",empPlace:"Covai"},
//         {empName:"Suresh" ,empId: "555",empAge:20,empSalary:70000,designation:"JS trainer",empPlace:"Chennai"},
//         {empName:"Ramesh",empId: "666",empAge:26,empSalary:30000,designation:"React developer",empPlace:"Delhi"},
//         {empName:"Sanker",empId: "777",empAge:25,empSalary:20000,designation:"DataBase developer",empPlace:"Canada"},
//         {empName:"Vijay",empId: "888",empAge:29,empSalary:25000,designation:"test engineer",empPlace:"USA"},
//         {empName:"Jhosaph",empId: "999",empAge:30,empSalary:24000,designation:"Associate software engineer",empPlace:"England"},
//         {empName:"Gorege",empId: "1010",empAge:21,empSalary:28000,designation:"software developer",empPlace:"Japan"}
//    ]}
//     render() {
//         return (
//             <div>
              
//              <App1/>
//             </div>
//         );
//     }
// }

// export default App;

// import React, { Component } from 'react'
// import ChildComponent from './ChildComponent'

// export default class App extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>im parent component</h1>
//                 <ChildComponent MERNStack="Gokul"/>
//                 <ChildComponent Salaray={40000}/>
//                 <ChildComponent Skills={['java','python','JS']}/>
//                 <ChildComponent Obj={{userName:'Gokul',age:22}}/>
//                 <ChildComponent func={()=>{
//                     console.log('Gokul');
//                 }}/>
//                 <ChildComponent math={Math.round(Math.random()*100)}/>
//                 <ChildComponent date={new Date().toLocaleDateString()}/>
//                 <ChildComponent un={undefined}/>
//                 <ChildComponent nul={null}/>
//                 <ChildComponent Bigin={10n}/>
//             </div>
//         )
//     }
// }

// import React, { Component } from 'react'
// import ChildComponent from './ChildComponent'

// export default class App extends Component {
//     state={emp:[
//                {empName:"Gokul",empId: "111",empAge:21,empSalary:30000,designation:"software developer",empPlace:"Neyveli"},
//                 {empName:"krishnan",empId: "222",empAge:22,empSalary:40000,designation:"Project manager",empPlace:"Banglore"}

//     ],
//     LearnNewThings:{
//         frontEnd:['html','css','js','react'],
//         backEnd:['Node.js','express.js','nextjs','nestjs','salesjs'],
//         dataBase:['mangodb','base','firebase']
//     }
// }
//     render() {
//         return (
//             <div>
//                 <ChildComponent obj={this.state} />
//             </div>
//         )
//     }
// }

// import React from 'react'
// import ChildComponent from './ChildComponent';

// const App = () => {
//     state={
//         userName:'gokul',
//         age:22,
//         salary:400000,
//         designation:'react developer'
//     }
//     return (
//         <div>
//             <ChildComponent state={this.state}/>
//         </div>
//     )
// }

// export default App

// import React, { Component } from 'react'
// import ChildComponent from './ChildComponent';

// export default class App extends Component {
//     render() {
//         return (
//             <div>
//                 <ChildComponent courses={{courseName :'MearnStack',
//             trainer:'shashi',duration:'5months',languages:['javascript']}}/>
//                 <ChildComponent courses={{courseName :'javaFullstack',
//             trainer:'dixith',duration:'5months',languages:['java','javascript']}}/>
//                 <ChildComponent courses={{courseName :'pythonFullstack',
//             trainer:'shashi',duration:'5months',languages:['python','javascript']}}/>
//             </div>
//         )
//     }
// }
// 
// import React, { Component } from 'react'
// import Table from './Table'

// export default class App extends Component {
//     render() {
//         return (
//             <div>
//                 <Table Item={{institution:'jspiders',course1:'javaFullstack',
//             course2:'mernFullstack',course3:'netFullstack'}} />
//             <Table Item={{institution:'qspiders',course1:'javaFullstack',
//             course2:'mernFullstack',course3:'netFullstack'}} />
//             {/* <Table Item={{institution:'jspiders',course1:'javaFullstack',
//             course2:'mernFullstack',course3:'netFullstack'}} />
//             <Table Item={{institution:'jspiders',course1:'javaFullstack',
//             course2:'mernFullstack',course3:'netFullstack'}} /> */}
//             </div>
//         )
//     }
// }

// table assingment
// import React, { Component } from 'react';
// import  Table  from './Table';
// import "./table.css"

// class App extends Component {


//   state={
//     jspiders:[{
//       course:"MERNfullstack",
//       trainer:"Shashi sir",
//       duraion:"5 months",
//       languages:["HTML",'CSS','JavaScript']
//     },
//     {
//       course:"JAVAfullstack",
//       trainer:"Dixith sir",
//       duraion:"5 months",
//       languages:["HTML",'CSS','JAVA']
//     },
//     {
//       course:"PYTHONfullstack",
//       trainer:"Gokul",
//       duraion:"5 months",
//       languages:["HTML",'CSS','Python']
//     },
//     {
//       course:"Manual testinng",
//       trainer:"Suhas sir",
//       duraion:"5 months",
//       languages:['Manual','Selenium','JAVA']
//     }

// ]
//     }


//   render() {
 
//     return (
//       <div>
//         <Table state={this.state.jspiders}/>
//         </div>
//     );
//   }
// }

// export default App;


// default props
// import React, { Component } from 'react'
// import User from "./User"
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <User username={100} />
//         <User />
//       </div>
//     )
//   }
// }



// state update
// import React, { Component } from 'react';

// class App extends Component {
//   state={
//     userName:"Gokul"
//   }
//   changeName=()=>{
//     this.setState({userName:"krishnan"})
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.userName}</h1>
//         <button onClick={this.changeName}>Click here </button>
//       </div>
//     );
//   }
// }

// export default App;

// function based

// import React , {useState} from 'react'



// export const App = () => {
//   let [name,setName]=useState('Gokul')
//   let changeName = ()=>{
//     setName ('krishnan')
//   };
//   return (
//     <div>
//       <h1>{name}</h1>
//       <button onClick={changeName}>click name</button>
//     </div>
//   )
// }

// import React, { Component } from 'react';

// class Counter extends Component {
//     state={
//         count:0
//     };
//     increment=()=>{
//         this.setState({count: this.state.count+1})
//     }
//     decrement =()=>{
//         this.setState({count: this.state.count+1})
//     }
//     reset =()=>{
//         this.setState({count:0})
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.increment}>Increment</button>
//                 <button onClick={this.decrement}>Decrement</button>
//                 <button onClick={this.reset}>Reset</button>
//             </div>
//         );
//     }

// }
// export default Counter;

// import React from 'react'
// import { useState } from 'react';

// export const counter = () => {
//     let [count,setCount]=useState(0);
//     let increment=()=>{
//         setCount(count+1);
//     }
//     let decrement=()=>{
//         setCount(count-1);
//     }
//     let reset=()=>{
//         setCount(0);
//     }
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={increment}>Increment</button>
//                  <button onClick={decrement}>Decrement</button>
//                 <button onClick={reset}>Reset</button>
//         </div>
//     )
// }
// import React, { Component } from 'react';
// import Randomnumbers from "./Randomnumbers"

// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <Randomnumbers/>
//             </div>
//         );
//     }
// }

// export default App;




// list and keys
// import React, { Component } from 'react';
// import PlayerComponent from './component/playerComponent';

// class App extends Component {
//   render() {
//     return (
//       <div>
//      <PlayerComponent/>
//       </div>
//     );
//   }
// }

// export default App;


// import React, { Component } from 'react';
// import productComponent from './Component2/productComponent';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <productComponent/>
//       </div>
//     );
//   }
// }

// export default App;


// import React from 'react'

// import ProductComponent from './Component2/ProductComponent'
// import ConditionRendaring from './Component2/ConditionRendaring'
// import PlayerComponent from './component/playerComponent';

// const App = () => {
//   return (
//     <div>
//      <ConditionRendaring/>
//       <ProductComponent/>
//       <PlayerComponent/>
     
//     </div>
//   )
// }

// export default App 


// refs

import React from 'react'
// import Controllcompo from './Forms/ControllCompo'
import Video from './VideoCompo/Video'
// import Mounting from './LifeCyce/Mounting'
// import HandellingFiles from './Forms/HandellingFiles'
// import Unconrolledcompo from './Forms/UnConrolledCompo'
// import Classbasedref from './RefsComponent/ClassBasedRef'
// import FunctionalBasedRefs from './RefsComponent/FunctionalBasedRefs'
// import VideoPlay from './VideioRef/VideoPlay'
// import VideoPlay from './VideoCompo/VideoPlay';

const App = () => {
  return (
    <div>
      {/* <Classbasedref/>  */}
       {/* <FunctionalBasedRefs/> */}
       {/* <VideoPlay/> */}
       {/* <Unconrolledcompo/> */}
      {/* <Controllcompo/> */}
      <Video/>
       {/* <HandellingFiles/> */}
      {/* <Mounting/> */}
      {/* <VideoPlay/> */}
   </div>
  )
}

export default App
