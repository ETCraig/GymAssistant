import React, {Component} from 'react';

import {connect} from 'react-redux';
import {getCurrentUser} from '../actions/userActions';
// import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class Goals extends Component {
    componentDidMount() {
        this.props.getCurrentUser();
    }
    render() {
        // const {user} = this.props.auth;
        
        return(
            <div>
                <h1>Goals!</h1>
            </div>
        );
    }
}

Goals.propTypes = {
    getCurrentUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {getCurrentUser})(Goals);