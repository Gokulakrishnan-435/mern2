// import React, { Component } from 'react'

// export default class ChildComponent extends Component {
   
//     render() {
//         console.log(this.props);
//         //destructuring obj
//         console.log("======================================");
//         let {emp,LearnNewThings}=this.props.obj
//         console.log(emp);
//         console.log(LearnNewThings);
//         //destructuring learnNewThings
//         console.log("========================================");
//         let {frontEnd,backEnd,dataBase}=LearnNewThings
//         console.log(frontEnd);
//         console.log(backEnd);
//         console.log(dataBase);
//         // combine arrays 
//         console.log("==========Combined============");
//         let mergeAll=[...frontEnd,...backEnd,...dataBase]
//         console.log(mergeAll);
//         return (
//             <div>
//                 <h2>
//                     im child Component
//                 </h2>
//                 {/* <h4>My name is {this.props.MERNStack}</h4> */}
//             </div>
//         )
//     }
// }

// import React from 'react'

// const ChildComponent = (props) => {
//     let {userName,age,salary,designation}=props.state
//     console.log(userName);
//     console.log(age);
//     console.log(salary);
//     console.log(designation);
//     return (
//         <div>
//             <h1>function based</h1>
//         </div>
//     )
// }

// export default ChildComponent

// import React, { Component } from 'react'

// export default class ChildComponent extends Component {
//     render() {
//         let {courseName,trainer,duration,languages}=this.props.courses;
       
//         return (
//          <section>
//              <article>
//                  <div className="Block">
//                      <h1>{courseName}</h1>
//                      <p>{trainer}</p>
//                      <p>{duration}</p>
//                      <p>{languages}</p>
//                  </div>
                 
//              </article>
//          </section>
         
//         )
//     }
// }

