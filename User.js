import React, { Component } from 'react';

export default class User extends Component {
   componentWillUnmount(){
    alert("are you sure")
   }
  render() {
    return (
      <div>
        <h1>Welcome User</h1>
       
      </div>
    )
  }
}
