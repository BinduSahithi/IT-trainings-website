import React, { Component } from 'react'
import Axios from 'axios'
export default class CustRead extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employee: []
        };
    }
    componnetDidMount() {
        Axios.get("http://localhost:4000/employeee")
            .then((res) => {
                this.setState({ employee: res.data })

            })
            .catch((err) => {
                console.log(err);
            })

    }
    render() {
        return (
            <div className='text-center container'>
                <h1>Employeee data from {" "}<span className="text-danger">Itech solutions</span></h1>
                <div className='table responsive'>
                    <table className="table table-primary">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">name</th>
                                <th scope="col">designantion</th>
                                <th scope="col">mail</th>
                                <th scope="col">salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employee.map(emp => {
                                    return (
                                        <tr>
                                            <td>
                                                {emp.id}
                                            </td>
                                            <td>
                                                {emp.name}
                                            </td>


                                            <td>
                                                {emp.designation}
                                            </td>
                                            <td>
                                                {emp.mail}
                                            </td>

                                            <td>
                                                {emp.salary}
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}