import React, {Component} from 'react';

import {Button, Form, FormGroup, Input, } from 'reactstrap';
var repMax = require('rep-max');

class repCalculator extends Component {
    constructor() {
        super() 
            
        this.state = {
            weight: 0,
            repetition: 0,
            conditions: false
        }
    }
    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit = e => {
        e.preventDefault();
        let myWeight = this.state.weight;
        let myRepetition = this.state.repetition;
        if(myWeight <= 0 && myRepetition <= 0) {
            this.setState({conditions: false})
        } else if(myWeight <= 0) {
            this.setState({conditions: false})
        } else if(myRepetition === 0) {
            this.setState({conditions: false})
        } else {
            this.setState({conditions: true})
        }
    }
    renderFooter() {
        let myWeight = this.state.weight;
        let myRepetition = this.state.repetition;
        if(!this.state.conditions) {
            return (
                <div>
                    <h1>Please enter both the weight and rep ranges.</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <h4>Your One Rep Max:{repMax.oneRepMax(myWeight, myRepetition)}</h4>
                    <h4>Your Two Rep Max:{repMax.nRepMax(2, myWeight, myRepetition)}</h4>
                    <h4>Your Three Rep Max:{repMax.nRepMax(3, myWeight, myRepetition)}</h4>
                </div>
            );
        }
    }
    render() {
        return(
            <div>
                <h1>1RM CALCULATOR</h1>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Input 
                            name='weight'
                            type='number'
                            placeholder='Weight' 
                            value={this.state.weight}
                            onChange={this.onChange} 
                        />
                        <Input 
                            name='repetition'
                            type='number'
                            placeholder='Reps' 
                            value={this.state.repetition}
                            onChange={this.onChange} 
                        />
                        <Button>Calculate Max</Button>
                    </FormGroup>
                </Form>
                {this.renderFooter()}
            </div>
        );
    }
}

export default repCalculator;