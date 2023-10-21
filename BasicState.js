import React, { Component } from 'react'

export default class BasicState extends Component {
  constructor(props){
    super(props)
    this.state={
      name:'raj',
      address:'hyderabad'          
     
    }
  }
  changeData=() =>{
    this.setState({
      name:'moon',
      address:'galaxy'
   })

  }
  render() {
    return (
      <div>
        <h1>hello {this.state.name} and adderess:{this.state.address}</h1>
        <button onClick={this.changeData}>update</button>
      </div>
    )
  }
}
