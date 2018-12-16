import React, {Component} from 'react';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {registerUser} from '../actions/authctions';
import {withRouter} from 'react-router-dom';

class Register extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({[e.target.value]: e.target.value});
    }
    onSubmit(e) {
        let {name, email, password, password2} = this.state;
        e.preventDefault();
        const newUser = {
            name,
            email,
            password,
            password2
        }
        this.props.registerUser(newUser, this.props.history);
    }
    render() {
        const {errors} = this.state;
        return(
            <div>
                <h1>Create Your New Account</h1>
                <input
                placeholder='Name'
                value={this.state.name}
                onChange={this.onChange} 
                />
                <input
                placeholder='Email'
                value={this.state.email}
                onChange={this.onChange} 
                />
                <input
                placeholder='Password'
                value={this.state.password}
                onChange={this.onChange} 
                />
                <input
                placeholder='Confirm Password'
                value={this.state.password2}
                onChange={this.onChange} 
                />
                <button>Create Account</button>
            </div>
        );
    }
}

export default Register;