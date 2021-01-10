import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Form, FormGroup, FormControl, Row, Col, Card, Button } from 'react-bootstrap'
import './RegisterForm.css'

export default function RegisterForm() {
    let firstName = useRef()
    let lastName = useRef()
    let gender = useRef()
    let bDate = useRef()
    let address = useRef()
    let className = useRef()
    let section = useRef()
    let gradientName = useRef()
    let jobTitle = useRef()
    let contactNo = useRef()
    let paid = useRef()
    let balance = useRef()
    async function handleFormSubmission(e){
        e.preventDefault()

        const student = {
            Name:"konson ak",
            age:20
        }

        let response = await fetch('/student', {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        })
        let json = await response.json()
 
        console.log(json)
        
    }
    return (
        <Card className="submissionForm alert-secondary">
            <Form className="p-3" onSubmit={ handleFormSubmission }>
                <div className="text-center py-3">
                    <h3>Ministry of education</h3>
                    <h3>Mahd juba secondary school</h3>
                    <h3>Submission form for accademic year 2021</h3>
                </div>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Form.Label>First Name</Form.Label>
                            <FormControl type="text"placeholder="First Name" ref={ firstName } name="firstName"/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Form.Label>Last Name</Form.Label>
                            <FormControl type="text"placeholder="Last Name" ref={lastName} name="lastName" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Form.Label>Gender</Form.Label>
                            <FormControl type="text"placeholder="Gender" ref={gender} name="gender" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Form.Label>Birth date</Form.Label>
                            <FormControl type="date"placeholder="Birth date" ref={bDate} name="bDate" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Form.Label>Address</Form.Label>
                            <FormControl type="text"placeholder="Street, vellige" ref={address} name="address" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Form.Label>Class/Primary</Form.Label>
                            <FormControl type="text"placeholder="Class name" ref={className} name="className"/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Form.Label>Section</Form.Label>
                            <FormControl type="text"placeholder="art or science" ref={section} name="section" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Form.Label>Graient Name</Form.Label>
                            <FormControl type="text"placeholder="Enter Gradient name" ref={gradientName} name="gradientName" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Form.Label>Graient occupation</Form.Label>
                            <FormControl type="text"placeholder="job or title" ref={jobTitle} name="jobTitle"/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Form.Label>Graient Contact</Form.Label>
                            <FormControl type="number"placeholder="+211900000000" ref={contactNo} name="contactNo"/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Form.Label>Amount Paid</Form.Label>
                            <FormControl type="number"placeholder="00" ref={paid}/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Form.Label>Balance</Form.Label>
                            <FormControl type="text"placeholder="00" ref={balance}/>
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
