import React, { Component } from 'react';

class Classbasedref extends Component {
    constructor(){
        super();
        this.ChangeText=React.createRef();
    }
    ChangeColor=()=>{
        let self=this.ChangeText.current.style;
        self.background="crimson";
        self.color="white";
        self.padding="10px";
    }
    render() {
        return (
            <div>
                <h1 ref={this.ChangeText}onClick={this.ChangeColor}>red</h1>
            </div>
        );
    }
}

export default Classbasedref;
