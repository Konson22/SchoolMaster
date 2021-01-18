import React, { useState, Component } from 'react';
import { Card, Button, Form, FormGroup, FormControl } from 'react-bootstrap'
import { FaSave, FaTimes } from 'react-icons/fa'

class ExpenseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemName:'',
            qty:'',
            unit:'',
            price:'',
            uploadDate: Date.now()
        }
    }
    handleInPut = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.setProcess(true)
        let body = JSON.stringify(this.state)
        fetch('https://schoolmaster-api.herokuapp.com/addexpenses', {
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:body
        }).then(res => res.json()).then(data => {
            this.props.setProcess(false)
            // console.log(this.props.process.setProcess)
        })
    }

  
    render() {
        return (
            <Card className="expense-form">
                <Card.Header className="formheader">
                    <span>Expense entary form</span> <FaTimes className="close-btn" onClick={this.props.toggelForm} />
                </Card.Header>
                <Card.Body>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <FormControl type="text" placeholder="Item name" value={this.state.itemName} name="itemName" onChange={ this.handleInPut }/>
                                </FormGroup>
                                <FormGroup>
                                    <FormControl type="text" placeholder="qty" value={this.state.qty} name="qty" onChange={ this.handleInPut }/>
                                </FormGroup>
                                <FormGroup>
                                    <FormControl type="text" placeholder="Unit" value={this.state.unit} name="unit" onChange={ this.handleInPut }/>
                                    {/* <select className="form-control">
                                        <option>Piece</option>
                                        <option>Bag</option>
                                        <option>Carton</option>
                                        <option>Kg</option>
                                    </select> */}
                                </FormGroup>
                                <FormGroup>
                                    <FormControl type="text" placeholder="Price" value={this.state.price} name="price" onChange={ this.handleInPut }/>
                                </FormGroup>
                                
                                <FormGroup>
                                    <Button className="btn btn-info" type="submit"><FaSave/> Save </Button>
                                </FormGroup>
                            </Form>
                </Card.Body>
                
            </Card>
        );
    }
}


export default ExpenseForm;



