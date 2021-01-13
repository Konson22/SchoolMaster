import React, {  useState, Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom'
import { Form, FormGroup, FormControl, Row, Col, Card, Button } from 'react-bootstrap'
import axios from 'axios'
import './RegisterForm.css'

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            gender:'',
            birthDate:'',
            address:'',
            imgUrl:"/images/img2.jpg",
            class:'',
            studentContact:'',
            gradientName:'',
            relationShip:'',
            gradientContact:'',
            fees:{
                paid:"0",
                balance:"0"
            }
        }
    }

    componentDidMount() {

    }
    handleInput = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleFeesPaidInput = (e) => {
        e.preventDefault()
        this.setState({
            fees:{
                paid: e.target.value, 
                balance:this.state.fees.balance
            }
        })
    }
    handleFeesBalanceInput = (e) => {
        e.preventDefault()
        this.setState({
            fees:{paid:this.state.fees.paid, balance: e.target.value}
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        fetch('/register', {
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(this.state)
        })
    }

    render() {
        return (
            <Card className="submissionForm alert-secondary">
            <Form className="p-3" onSubmit={ this.handleSubmit }>
                <div className="text-center py-3">
                    <h3>Ministry of education</h3>
                    <h3>Mahd juba secondary school</h3>
                    <h3>Submission form for accademic year 2021</h3>
                </div>
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Form.Label>First Name</Form.Label>
                            <FormControl type="text"placeholder="First Name" value={this.state.name} name="name" onChange={ this.handleInput } />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Form.Label>Gender</Form.Label>
                            <FormControl type="text"placeholder="Gender" value={this.state.gender} name="gender"  onChange={ this.handleInput }/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Form.Label>Birth date</Form.Label>
                            <FormControl type="date"placeholder="Birth date" value={this.state.birthDate} name="birthDate" onChange={ this.handleInput } />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Form.Label>Address</Form.Label>
                            <FormControl type="text"placeholder="Street, vellige" value={this.state.address} name="address" onChange={ this.handleInput }/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Form.Label>Student contact</Form.Label>
                            <FormControl type="text"placeholder="Class name"  value={this.state.studentContact} name="studentContact" onChange={ this.handleInput }/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Form.Label>Class/Primary</Form.Label>
                            <FormControl type="text"placeholder="Class name"  value={this.state.class} name="class" onChange={ this.handleInput }/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Form.Label>Graient Name</Form.Label>
                            <FormControl type="text"placeholder="Enter Gradient name" value={this.state.gradientName} name="gradientName" onChange={ this.handleInput }/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Form.Label>Relationship</Form.Label>
                            <FormControl type="text"placeholder="job or title" value={this.state.relationShip} name="relationShip" onChange={ this.handleInput }/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Form.Label>Graient Contact</Form.Label>
                            <FormControl type="number"placeholder="+211900000000" value={this.state.gradientContact} name="gradientContact" onChange={ this.handleInput }/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Form.Label>Amount Paid</Form.Label>
                            <FormControl type="number"placeholder="00" value={this.state.fees.paid} name="paid" onChange={ this.handleFeesPaidInput }/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Form.Label>Balance</Form.Label>
                            <FormControl type="text"placeholder="00" value={this.state.fees.balance} name="balance" onChange={ this.handleFeesBalanceInput }/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Form.Label>Previouse Balance</Form.Label>
                            <FormControl type="text"placeholder="Birth date" onChange={ this.handleInput }/>
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Button type="submit" variant="success">Submit</Button>
                    <Button className="mx-3" type="reset" variant="warning">Reset</Button>
                    <Link className="btn btn-danger" to="/">Cancel</Link>
                </FormGroup>
            </Form>
        </Card>
        );
    }
}


export default RegisterForm;

