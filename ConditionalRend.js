import React, { Component } from 'react'

export default class ConditionalRend extends Component {
  constructor() {
    super();
    this.state = {
     trainer:"bhargav",
    };
  }
  
  render() {
    let msg;
    switch(this.state.trainer){
      case 'bhargav':
        msg=<h1>welcome to ui developer class</h1>;
        break;
      case 'anand':
        msg=<h1>welcome to ui/ux class</h1>;
        break;
      case 'sudheer':
        msg=<h1>welcome to python  class</h1>;
        break;
      default:
        msg=<h1>welcome to elearn</h1>
    }
    return msg;
  }
}
