import React, {Component} from 'react';
import {addGoal} from '../actions/goalActions';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import {connect} from 'react-redux';
import {getCurrentUser} from '../actions/userActions';
import GoalList from './GoalList';
import PropTypes from 'prop-types';

class GoalsModel extends Component {
    state = {
        modal: false,
        name: ''
    }
    toggle = () => {
        this.setState({modal: !this.state.modal});
    }
    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit = e => {
        e.preventDefault();
        const newGoal = {
            name: this.state.name
        }
        this.props.addGoal(newGoal);
        this.toggle();
    }
    render() {
        // const {user} = this.props.auth;
        
        return(
            <div>
                <Button
                    color='dark'
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >
                Add Goal
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add to Goal List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for='goal'>Goal</Label>
                                <Input
                                    type='text'
                                    name='name'
                                    id='goal'
                                    placeholder='Add New Goal'
                                    onChange={this.onChange} 
                                />
                                <Button
                                    color='dark'
                                    style={{marginTop: '2rem'}}
                                    block
                                >
                                Add Goal
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
                <GoalList />
            </div>
        );
    }
}

GoalsModel.propTypes = {
    getCurrentUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    goal: state.goal
});

export default connect(mapStateToProps, {addGoal, getCurrentUser})(GoalsModel);