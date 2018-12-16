import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const SecureRoute = ({component: Component, auth, ...rest}) => (
    <Route {...rest} render = {props => auth.isAuthenticated === true ? (
        <component {...props} />
    ) : (
        <Redirect to='/Login' />
    )} />
);

SecureRoute.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(SecureRoute);