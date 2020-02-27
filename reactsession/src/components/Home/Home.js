import React from 'react';

class HomeComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    handleChange = (e)=>{
        console.log(e.target.value);
        this.setState({[e.target.name]:e.target.value})
    }
    // handlePasswordChange = (e) =>{
    //     this.setState({password:e.target.value})
    // }
    handleLogin = () => {
        const {email,password} = this.state;
        console.log(email);
        console.log(password);
    }
    render(){
        const {email,password} = this.state;
        return(
            <div className="" style={{maxWidth:"500px",display:"block",margin:"30px auto"}}>
                <div className="card">
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" 
                                name="email"
                                value={email}
                                onChange = {this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" 
                                name="password"
                                value={password}
                                onChange = {this.handleChange}
                            />
                        </div>                        
                        <button type="submit" className="btn btn-primary"
                            onChange={this.handleLogin}
                        >Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeComponent;