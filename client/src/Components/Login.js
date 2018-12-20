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
        if(nextProps.errors) {
            const {errors} = nextProps;
            this.setState({errors});
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
        // const {errors} = this.state;
        return(
            <div className='login'>
                <div className='container'>
                    <div className='col-md-8 m-auto'>
                    <h1 className='display-4 text-center'>Login</h1>
                    <p className='lead text-center'>Login to your Gym Assistant account here.</p>
                        <form noValidate onSubmit={this.onSubmit} id='row-auth'>
                            <input 
                                name='email'
                                type='email'
                                placeholder='Email'
                                onChange={this.onChange} 
                            />
                            <input
                                name='password'
                                type='password'
                                placeholder='Password'
                                onChange={this.onChange} 
                            />
                            <button type='submit' className='btn btn-info btn-block mt-4'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        errors: state.errors
    }
}

export default connect(mapStateToProps, {loginUser})(Login);