import React,{useRef}from 'react'

const FunctionalBasedRefs = () => {
    let ChangeBlue=useRef();
    let Change=()=>{
        let self1=ChangeBlue.current.style;
        self1.background="royalblue";
        self1.color="white";
        self1.padding="10px";
    }
    return (
        <div>
            <h2 ref={ChangeBlue} onClick={Change}>Blue</h2>
        </div>
    )
}

export default FunctionalBasedRefs
