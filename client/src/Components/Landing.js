import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

class Landing extends Component {
    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/Goals');
        }
    }
    render() {
        return(
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h1>Welcome to Gym Assistant!</h1>
                <Link to='/Login' className='btn btn-sm btn-info mr-2'>Login</Link>
                <Link to='/Register' className='btn btn-sm btn-light'>Register</Link>
            </div>
        );
    }
}

Landing.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Landing);