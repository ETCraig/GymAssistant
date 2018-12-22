import React, {Component} from 'react';

import {Button, Form, FormGroup, Input, Table} from 'reactstrap';
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
                <Table striped>
                    <thead>
                        <tr>
                            <th>Formula</th>
                            <th>One Rep Max</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope='row'>Epley Formula:</th>
                            <td><strong>{repMax.oneRepMax(myWeight, myRepetition)}lb</strong></td>
                        </tr>
                        <tr>
                            <th scope='row'>Brzycki Formula:</th>
                            <td><strong>{repMax.oneRepMax(myWeight, myRepetition, {formula: 'brzycki'})}lb</strong></td>
                        </tr>
                        <tr>
                            <th scope='row'>McGlothin Formula:</th>
                            <td><strong>{repMax.oneRepMax(myWeight, myRepetition, {formula: 'mcGlothin'})}lb</strong></td>
                        </tr>
                        <tr>
                            <th scope='row'>Lombardi Formula:</th>
                            <td><strong>{repMax.oneRepMax(myWeight, myRepetition, {formula: 'lombardi'})}lb</strong></td>
                        </tr>
                        <tr>
                            <th scope='row'>Mayhew Formula:</th>
                            <td><strong>{repMax.oneRepMax(myWeight, myRepetition, {formula: 'mayhew'})}lb</strong></td>
                        </tr>
                        <tr>
                            <th scope='row'>O'Conner Formula:</th>
                            <td><strong>{repMax.oneRepMax(myWeight, myRepetition, {formula: 'oConner'})}lb</strong></td>
                        </tr>
                        <tr>
                            <th scope='row'>Wathan Formula:</th>
                            <td><strong>{repMax.oneRepMax(myWeight, myRepetition, {formula: 'wathan'})}lb</strong></td>
                        </tr>
                    </tbody>
                </Table>
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