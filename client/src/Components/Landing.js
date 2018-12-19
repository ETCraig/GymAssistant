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
            <div className="landing">
                <div className="dark-overlay landing-inner text-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className='display-3 mb-4' style={{display: 'flex', justifyContent: 'center', textJustify: 'auto'}}>Welcome to <span className='title'> Gym Assistant!</span></h1>
                                <p className='lead'>Keep track of your personal fitness goals, and take advantage of two custom made calculators.</p>
                                <Link to='/Login' className='btn btn-md btn-info mr-2' style={{margin: '20px'}}>Login</Link>
                                <Link to='/Register' className='btn btn-md btn-light' style={{margin: '20px'}}>Register</Link>
                            </div>
                        </div>
                    </div>
                </div>
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