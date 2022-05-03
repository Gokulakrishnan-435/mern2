import React, { Component } from 'react'
import PropTypes from "prop-types"
class User extends Component {
    render() {
        console.log(this);
        return (
            <div>
                <h1>
                    {this.props.children}
                    {/* {this.props.username||"this is default"} */}
                </h1>
            </div>
        )
    }
}
export default User
User.propTypes={
    username:PropTypes.string,
};

