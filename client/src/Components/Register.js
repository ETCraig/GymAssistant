import React, {Component} from 'react';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {registerUser} from '../actions/authActions';
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
    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/Goals');
        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            let {errors} = nextProps;
            this.setState({errors});
        }
    }
    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
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
        // const {errors} = this.state;
        return(
            <div className='register'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8 m-auto'>
                        <h1 className='display-4 text-center'>Create Your New Account</h1>
                        <p className='lead text-center'>Create your own Gym Assistant account here.</p>
                            <form noValidate onSubmit={this.onSubmit} action='create-profile.html' id='row-auth'>
                                <input
                                    name='name'
                                    type='name'
                                    placeholder='Name'
                                    value={this.state.name}
                                    onChange={this.onChange} 
                                />
                                <input
                                    name='email'
                                    type='email'
                                    placeholder='Email'
                                    value={this.state.email}
                                    onChange={this.onChange} 
                                />
                                <input
                                    name='password'
                                    type='password'
                                    placeholder='Password'
                                    value={this.state.password}
                                    onChange={this.onChange} 
                                />
                                <input
                                    name='password2'
                                    type='password'
                                    placeholder='Confirm Password'
                                    value={this.state.password2}
                                    onChange={this.onChange} 
                                />
                                <button type='submit' className='btn btn-info btn-block mt-4'>Create Account</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {registerUser})(withRouter(Register));