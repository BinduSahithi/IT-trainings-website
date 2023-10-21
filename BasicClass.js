import React, { Component } from 'react'

export default class BasicClass extends Component {
  render() {
    let a=3
    let b=2.1
    return (
      <div>
        <h1>Welcome {this.props.name}</h1>
        <p>console.log{console.log(a+b)}</p>
      </div>
    )
  }
}

