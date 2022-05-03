import React, { Component } from 'react';
import Parent from './Parent'; 

class Grandparent extends Component {
    render() {
        return (
            <div>
                <h1 style={{background:"red"}}>Im Grandparent</h1>
                <Parent userName="Gokul"/>
            </div>
        );
    }
}

export default Grandparent;
