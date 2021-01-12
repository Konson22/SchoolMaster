import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Form, FormGroup, FormControl, Row, Col, Card, Button } from 'react-bootstrap'
import './RegisterForm.css'

export default function RegisterForm() {
    const handleChange = (e) => {
    let arr = []

        e.preventDefault()
        arr.push({
            input:e.target.name,
            value:e.target.value
        })
    console.log(arr)

    }
    return (
        <Card className="submissionForm alert-secondary">
            <Form className="p-3" onChange={ handleChange }>
                <div className="text-center py-3">
                    <h3>Ministry of education</h3>
                    <h3>Mahd juba secondary school</h3>
                    <h3>Submission form for accademic year 2021</h3>
                </div>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Form.Label>First Name</Form.Label>
                            <FormControl type="text"placeholder="First Name" name="firstName"/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Form.Label>Last Name</Form.Label>
                            <FormControl type="text"placeholder="Last Name" name="lastName" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Form.Label>Gender</Form.Label>
                            <FormControl type="text"placeholder="Gender"  name="gender" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Form.Label>Birth date</Form.Label>
                            <FormControl type="date"placeholder="Birth date"  name="bDate" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Form.Label>Address</Form.Label>
                            <FormControl type="text"placeholder="Street, vellige"  name="address" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Form.Label>Class/Primary</Form.Label>
                            <FormControl type="text"placeholder="Class name"  name="className"/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Form.Label>Section</Form.Label>
                            <FormControl type="text"placeholder="art or science"  name="section" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Form.Label>Graient Name</Form.Label>
                            <FormControl type="text"placeholder="Enter Gradient name"  name="gradientName" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Form.Label>Graient occupation</Form.Label>
                            <FormControl type="text"placeholder="job or title"  name="jobTitle"/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Form.Label>Graient Contact</Form.Label>
                            <FormControl type="number"placeholder="+211900000000" name="contactNo"/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Form.Label>Amount Paid</Form.Label>
                            <FormControl type="number"placeholder="00" name="paid"/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Form.Label>Balance</Form.Label>
                            <FormControl type="text"placeholder="00" name="balance" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Form.Label>Previouse Balance</Form.Label>
                            <FormControl type="text"placeholder="Birth date" />
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
    )
}
