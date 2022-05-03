// import React, { Component } from 'react'

// export default class Table extends Component {
//     render() {
//         console.log(this.props);
//         let {institution,course1,course2,course3}=this.props.Item;
//         return (
//             <div>
//                   <table className="Block">
//                       <td><tr>
//                      <th>{institution}</th>
//                      </tr></td>
//                      <td>
//                     <tr>{course1}</tr>
//                     <tr>{course2}</tr>
//                      <tr>{course3}</tr>
//                      </td>
                     

                
//                   </table>
//             </div>
            
//         )
//     }
// }
import React from 'react'

const Table = (props) => {
   
    return (
        <section>
            <article>
                <h1>Jspiders</h1>
            <table>
              
              <tr>
                  <th>COURSE NAME</th>
                  <th>TRAINER</th>
                  <th>DURATION</th>
                  <th>LANGUAGE</th>
              </tr>
             
                  {props.state.map((x)=>(
                      <tr>
                          <td>{x.course}</td>
                          <td>{x.trainer}</td>
                          <td>{x.duraion}</td>
                         <td>{x.languages.map((y)=>
                          <p>{y}</p>
                          
                          
                          )}</td>
                      </tr>
                  ))}
       </table>
            </article>
        </section>
           
        
    )
}

export default Table
