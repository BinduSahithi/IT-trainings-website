import React,{Component} from 'react'
export default class Validations extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            email:"",
            mobile:"",
        }
    }
    changeName=(e)=>{
        this.setState({
            name: e.target.value,
        })
        console.log(e.target.value)
    }
    changeEmail=(e)=>{
        this.setState({
            email : e.target.value,
        });
    }
    changeMobile=(e)=>{
        this.setState({
            mobile: e.target.mobile,
        });
    }
    submitHandler=(event)=>{
        event.preventDefault();
      let  username=this.state.name;
        if(( username==="")){
            document.getElementById("nameNote").innerHTML="pLEASE enter name"
        }
        else{
            console.log("welcome "+ username);
        }
    }
    render(){
        
        return(
            
                <div className='container' id="contact">
        <div className='row'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 p-5'>
            <h1 className='text-center'>Reach Us</h1>
            <form  >
            <input
                type='text'
                id="name"
                value={this.state.name}
                onChange={this.changeName}
                placeholder='Enter your Name'
              />
              <input 
              type='email' 
              name="email" id="email"
               value={this.state.email}
               onChange={this.changeEmail}
                placeholder='E-mail ID' />
                <p id="nameNote" ></p>
              <input 
              type='teL' 
              name="mobile"
               id="mobile" 
               value={this.state.mobile}
               onChange={this.changeMobile}
                placeholder='Mobile Number' />
              <select>
                <option value='' hidden>Select your course</option>
                <option value='ui/ux'>UI UX designing</option>
                <option value='ui'>UI</option>
                <option value='python'>Python</option>
              </select>
              <textarea name="" id="" rows="3" ></textarea>
              <input type="submit" className="submit " placeholder='Submit'  />


            </form>
           
            </div>
            </div>
            </div>
        )
    }
}