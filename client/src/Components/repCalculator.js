import React, {Component} from 'react';

import {Button, Form, FormGroup, Input, Table} from 'reactstrap';
var repMax = require('rep-max');


class repCalculator extends Component {
    constructor() {
        super() 
            
        this.state = {
            weight: Number,
            repetition: Number,
            conditions: false
        }
    }
    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
        this.setState({conditions: false});
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
                    <h1 className='lead text-center'>Please enter both the weight and rep ranges.</h1>
                </div>
            );
        } else {
            return (
                <Table striped bordered>
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
            <div className='col-md-8 m-auto'>
                <h1 className='display-4 text-center'>1RM CALCULATOR</h1>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Input 
                            name='weight'
                            type='number'
                            placeholder='Weight' 
                            value={this.state.weight}
                            onChange={this.onChange} 
                        />
                        <br />
                        <Input 
                            name='repetition'
                            type='number'
                            placeholder='Reps' 
                            value={this.state.repetition}
                            onChange={this.onChange} 
                        />
                        <Button className='btn btn-info btn-block mt-4'>Calculate Max</Button>
                    </FormGroup>
                </Form>
                {this.renderFooter()}
            </div>
        );
    }
}

export default repCalculator;