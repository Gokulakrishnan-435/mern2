// import React, { Component,createRef } from 'react';

// class Unconrolledcompo extends Component {
//     usernameRef=createRef();
//     passwordRef=createRef();
//     handleSubmit(e){
//         e.preventDefault();
//         let user=this.usernameRef.current.value;
//         let pass=this.passwordRef.current.value;
//         console.log({user,pass});
//     }
//     render() {
//         return (
//             <div>
//                 <form >
//                     <div><input type="text" placeholder="username" name="username" ref={this.usernameRef}/></div>
//                     <div><input type="password" placeholder="password" ref={this.passwordRef}  /></div>
//                     <div>
//                         <button onClick={this.handleSubmit.bind(this)} >Submit</button>
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }

// export default Unconrolledcompo;

import React, { useRef } from "react";

const UnConrolledCompo = () => {
  let fiesDate = useRef();
  let handleSubmit = e => {
    e.preventDefault();
    let data = fiesDate.current.data[0];
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" ref={fiesDate} />
      </div>
    </form>
  );
};

export default UnConrolledCompo;
