import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class sample extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : 'shenba',
            department : 'UI',
            msg : ''
        }
        // this.nameChange = this.nameChange.bind(this);
    }
    nameChange = (e) =>{
        this.setState ({
            [e.target.name]: e.target.value
        })
    }
    formSubmit = (e) =>{
        e.preventDefault();
        this.setState({
            msg : "Successfully Submitted"
        })
    }
    render() {
        const {name,department} = this.state;
        return (
            <div className="container">
                <h1>{name}</h1>
                <h1>{department}</h1>
                <p>{this.state.msg}</p>
                <form onSubmit={this.formSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Name:</label>
                      <input type="text" value={name} className="form-control" id="name" name="name" onChange={this.nameChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="pwd">Department:</label>
                      <input type="text" value={department} className="form-control" name="department" id="department" onChange={this.nameChange} />
                    </div>                   
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        )
    }
}
