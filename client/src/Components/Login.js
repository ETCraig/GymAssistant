import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../actions/authctions';

class Login extends Component {
    constructor() {
        super();

        this.state={
            email: '',
            password: '',
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit(e) {
        let {email, password} = this.state;
        e.preventDefault();
        const userData = {
            email,
            password
        }
        this.props.loginUser(userData);
    }
    render() {
        const {errors} = this.state;
        return(
            <div>
                <h1>Please Login</h1>
                <input 
                type='email'
                placeholder='Email'
                onChange={this.onChange} 
                />
                <input
                type='password'
                placeholder='Password'
                onChange={this.onChange} 
                />
                <button>Login</button>
            </div>
        );
    }
}

export default Login;