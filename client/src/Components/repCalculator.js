import React, {Component} from 'react';

import {Button, FormGroup, Input, } from 'reactstrap';
var repMax = require('rep-max');

class repCalculator extends Component {
    constructor() {
        super() 
            
        this.state = {
            weight: '',
            repetition: ''
        }
    }
    onchangeWeight(value) {
        this.setState({weight: value});
    }
    onChangeRepetition(value) {
        this.setState({repetition: value});
    }
    render() {
        return(
            <div>
                <h1>1RM CALCULATOR</h1>
                <FormGroup>
                    <Input 
                        placeholder='Weight' 
                        value={this.state.weight}
                        onChange={(e) => this.onchangeWeight(e.target.value)} 
                    />
                    <Input 
                        placeholder='Reps' 
                        value={this.state.repetition}
                        onChange={(e) => this.onChangeRepetition(e.target.value)} 
                    />
                    <Button>Calculate Max</Button>
                </FormGroup>
            </div>
        );
    }
}

export default repCalculator;