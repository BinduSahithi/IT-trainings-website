import React, { Component } from 'react'

export default class LifeCycle extends Component {
 constructor(props){
    super(props)
    this.state={
        name:"Elearn",
    }
    console.log("this is a message from constructor")
 }
 changeData=()=>{
    console.log("this is a message from data")
 };
 static getDerivedStateFromProps(){
    console.log("this is a message from getDerivedStateFromProps")
    return null;
 }
 componentDidMount(){
    console.log("this is a message from componentDidMount")
 }
    render() {
        console.log("this is a message from render")
    return (
      <div>
        <h1>welcome to {this.state.name}</h1>
      </div>
    )
  }
}
