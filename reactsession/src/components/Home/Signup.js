import React from 'react';
import '../../styles/signupstyle.css'

class SignUpComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {   
            firstname:props.firstname,
            lastname:'',
            email:'',         
            password:'',
            cpassword:''
        }
    }

    handleChange = (e)=>{
        // console.log(e.target.value);
        this.setState({[e.target.name]:e.target.value});
    }
    handlePasswordChange = (e) => {
        // console.log(e.target.value);
        this.setState({password:e.target.value});
    }
    handleCpasswordChange = (e) =>{
        // console.log(e.target.value);
        this.setState({cpassword:e.target.value})
    }
    handleSignup=()=>{
        const {password,cpassword} = this.state;
       
        if(password === cpassword){
            alert("success");
        }
        else{
            alert("Password does not match");
        }
    }

    render(){
        const {firstname,lastname,email,password,cpassword} = this.state;
        return(
            <div className="" style={{maxWidth:"500px",display:"block",margin:"30px auto"}}>
                <div className="card">
                    <div className="card-body">
                        <div className="form-group leftalign">
                            <label htmlFor="firstname">First Name</label>
                            <input type="email" className="form-control" 
                                name="firstname"
                                value={firstname}
                                onChange = {this.handleChange}
                            />
                        </div>
                        <div className="form-group leftalign">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="email" className="form-control" 
                                name="lastname"
                                value={this.props.lastname}
                                onChange = {this.handleChange}
                            />
                        </div>
                        <div className="form-group leftalign">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" 
                                value={this.props.email}
                                onChange = {this.handleChange}
                            />
                        </div>
                        <div className="form-group leftalign">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" 
                                value={password}
                                onChange = {this.handlePasswordChange}
                            />
                        </div>   
                        <div className="form-group leftalign">
                            <label htmlFor="cpassword">Confirm Password</label>
                            <input type="password" className="form-control" 
                                value={cpassword}
                                onChange = {this.handleCpasswordChange}
                            />
                        </div>                       
                        <button type="submit" className="btn btn-primary"
                            onClick={this.handleSignup}
                        >Signup</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default SignUpComponent;