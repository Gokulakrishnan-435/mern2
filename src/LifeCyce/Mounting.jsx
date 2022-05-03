import React, { Component } from 'react';

class Mounting extends Component {
    constructor(){
        super();
        console.log("im a constructor");
    this.state={
        count:0,
    };
    this.Increment=this.Increment.bind(this)
    }
    static getDerivedStateFromProps(props,state){
        console.log("im getDerivedStateFromProps");
    }
    componentDidMount(){
        console.log("im componentDidMount");
    }
    
    Increment(){
        this.setState({count:this.state.count+1})
    }

    render() {
        console.log("im a render");
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.Increment}>Increment</button>
            </div>
        );
    }
}

export default Mounting;
