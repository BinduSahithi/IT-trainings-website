import React, { Component } from "react"
export default class Mapping extends Component{
   constructor(){
   super()
   this.state={
    qwerty:[1,2,3,4,5]
   }
   }
render(){
    return(
        <div>
            {this.state.qwerty.map((a)=>{
             return a*5;
            })}
        </div>
    );
}
  
} 