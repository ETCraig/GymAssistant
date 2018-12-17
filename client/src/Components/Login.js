import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../actions/authActions';
import PropTypes from 'prop-types';

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
    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/Goals');
        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/Goals');
        }
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

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    authL: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        errors: state.errors
    }
}

export default connect(mapStateToProps, {loginUser})(Login);