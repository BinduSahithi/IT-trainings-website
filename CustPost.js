import React, { Component } from 'react'

export default class CustPost extends Component {
    constructor(props){
        super(props)
        this.state={
        id:" ",
        name:" ",
        designation:" ",
        mail:" ",
        salary:" ",
        };

    }
    changeData=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })

    }
    render() {
        const {id,name,designation,mail,salary}=this.state;
        return (
            <div className='container'>
                <h1 className='text-center'>new employee data</h1>
                <div className='col-12 col-md-6 mx-auto p-5 bg-dark'>
                <form>
                    <div class="form-floating mb-3">
                        <input
                            type="number"
                            class="form-control"
                            name="id"
                            id="id"
                            placeholder=""
                            value={id}
                            onChange={this.changeData}
                        />
                        <label for="id">employee id</label>
                        <div class="form-floating mb-3">
                            <input
                                type="text"
                                class="form-control"
                                name="name"
                                id="name"
                                placeholder=""
                                value={name}
                            onChange={this.changeData}
                            />
                            <label for="name">employee name</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input
                                type="text"
                                class="form-control"
                                name="designation"
                                id="designantion"
                                placeholder=""
                                value={designation}
                            onChange={this.changeData}
                            />
                            <label for="designation">employee designnation</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input
                                type="email"
                                class="form-control"
                                name="mail"
                                id="mail"
                                placeholder=""
                                value={mail}
                            onChange={this.changeData}
                            />
                            <label for="mail">employee mail</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input
                                type="number"
                                class="form-control"
                                name="salary"
                                id="salary"
                                placeholder=""
                                value={salary}
                            onChange={this.changeData}
                            />
                            <label for="salary">employee salary</label>
                        </div>
                    </div>

                    <input type="submit" value="add employee" />
                </form>
                </div>
            </div>
        );
    }
}
