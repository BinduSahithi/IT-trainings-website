import React,{Component} from "react";
import Axios from "axios"
export default class BasicRead extends Component{
    constructor(props){
        super(props);
        this.state={
            posts:[],
        }
    }
    componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
      this.setState({
        posts:res.data,

      })
    })
    .catch((err)=>{
        console.log(err);
    })
    }
    render(){
        return(
            <div className="container " > 
                <h1 className="text-center">Data Fetching</h1>
                 <div className="row">
                   {this.state.posts.map((item)=>{
                    return(
                        <div className="col-3 d-flex flew-wrap" style={{height:"12rem"}}> 
                        <div className="card mb-3 flex-grow overflow-auto" >
                        <div className="card-body">
                            <h4 className="card-title">
                               {item.id}
                            </h4>
                          <p className="card-text">{item.body}</p>
                        </div>
                        </div>
                        </div> 
        
                    )
                   })}
                 </div>
                 
            </div>
        )
    }
}