import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import {connect} from 'react-redux';
import {clearCurrentUser} from '../actions/userActions';
import {Link} from 'react-router-dom';
import {logoutUser} from '../actions/authActions';
import PropTypes from 'prop-types';

class NavBar extends Component {
    state = {isOpen: false}
    toggle = () => {
        this.setState({isOpen: !this.state.isOpen});
    }
    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
        this.props.logoutUser();
    }
    render() {
        const {isAuthenticated, user} = this.props.auth;

        const userLinks = (
            <Nav className='navbar-nav ml-auto' navbar>
                <NavItem>
                    <Link onClick={this.onLogoutClick.bind(this)} className='nav-link'>Logout</Link>
                </NavItem>
            </Nav>
        );

        const authLink = (
            <Nav className='navbar-nav ml-auto' navbar>
                <NavItem>
                    <Link to='/Register' className='nav-link'>Sign Up</Link>
                </NavItem>
                <NavItem>
                    <Link to='/Login' className='nav-link'>Login</Link>
                </NavItem>
            </Nav>
        );
        return(
            <div>
                <Navbar color='dark' dark expand='sm' className='mb-5'>
                    <Container>
                        <NavbarBrand id='NavBarBrand'>Gym Assistant</NavbarBrand>
                            {/* <Nav className='ml-auto' navbar> */}
                                {isAuthenticated ? userLinks : authLink}
                            {/* </Nav> */}
                    </Container>
                </Navbar>
            </div>
        );
    }
}

NavBar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        errors: state.errors
    }
}

export default connect(mapStateToProps, {logoutUser, clearCurrentUser})(NavBar);