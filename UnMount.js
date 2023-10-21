import React,{Component} from 'react';
import User from './User';
export default class UnMount extends Component{
    constructor(props){
        super(props)
        this.state={
            login:true
        }
    }
    changeData=()=>{
        this.setState({
            login:false
        })
    }
    render(){
        let msg;
        if(this.state.login){
            msg=<User/>;

        } else{
            msg='try again';
        }
        return (<div>{msg}
        <button onClick={this.changeData}>Logout</button></div>
        );
}
}

