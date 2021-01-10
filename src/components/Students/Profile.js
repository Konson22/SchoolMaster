import React, { useState, useEffect } from 'react'
import { Card, Row, Col, Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import { useTransition, animated } from 'react-spring'
import { useParams } from 'react-router-dom'
import { BsX } from 'react-icons/bs'
import Loader from '../Loader/Loader'
import './Students.css'


export default function Profile() {
    const [student, setStudent] = useState({
        status:false,
        data:null,
        error:false
    })
    const {id} = useParams()
    useEffect(()=> {
        fetch('/students').then(res => res.json())
        .then(data => data.find(student => student.id == id))
        .then( profile => setStudent({
            status:true,
            data:profile,
            error:false
        }))
    }, [])
    
    let content;
    if(student.status){
        console.log(student.data.name)
        content = (
            
                <Row>
                    <Col lg={4} md={6}>
                        <img className="profileImg" src={process.env.PUBLIC_URL + student.data.imgUrl} />
                    </Col>
                    <Col lg={4} md={6} >
                        <h4><b>Student Details</b></h4>
                        <p>Name: { student.data.name }</p>
                        <p>Gender: { student.data.gender }</p>
                        <p>Birth Date:{ student.data.birthDate }</p>
                        <p>Address: { student.data.address }</p>
                        <p>Class/Primary: { student.data.class }</p>
                        <p>Graient Name: { student.data.gradientName }</p>
                        <p>Graient occupation: { student.data.gradientOccupation }</p>
                        <p>Graient phone: { student.data.gradientContact }</p>
                    </Col>
                   
                    <Col lg={3} md={12}>
                        <h4><b>Payment Invoice</b></h4>
                        <table className="table">
                            <tr>
                                <td>First installement</td>
                                <td>{ student.data.firstTermPaid } SSP</td>
                            </tr>
                            <tr>
                                <td>First installement</td>
                                <td>{ student.data.secondTermPaid } SSP</td>
                            </tr>
                            <tr>
                                <td>Total amount paid</td>
                                <td>{ student.data.firstTermPaid + student.data.secondTermPaid } SSP</td>
                            </tr>
                            <tr>
                                <td>Outstanding balance</td>
                                <td>{ 3500 - (student.data.firstTermPaid + student.data.secondTermPaid) } SSP</td>
                            </tr>
                            <Button className="btn btn-sm" variant="success" onClick={ handleInvoiceForm }>Invoice form</Button>
                        </table>
                    </Col>
                </Row>
                
        )
        
    }else{
        content = <Loader />
    }


    const [showInvoice, setShowInvoice] = useState(false)

    const transitions = useTransition(showInvoice, null, {
        from:{opacity:0, transform:'translateY(-50%)'},
        enter:{opacity:1, transform:'translateY(0)'},
        leave:{opacity:0, transform:'translateY(-50%)'}
    })

    function handleInvoiceForm(e){
        e.preventDefault()
        setShowInvoice(true)
    }
    
    function hideInvoiceForm(e){
        e.preventDefault()
        setShowInvoice(false)
    }
    return (
        <div>
            
            <Card className="p">
                <Card.Title>
                    <b>Student profile</b>
                </Card.Title>
                <Card.Body>
                { content }
                </Card.Body>

                <Card.Footer>
                <div className=" text-rght">
                    <Button variant="success" onClick={ handleInvoiceForm }>Invoice form</Button>
                    <Button className="mx-2">Edit profile</Button>
                    <Button className="mr-2" variant="warning">Result</Button>
                    <Button variant="danger">Dismiss</Button>
            </div>
                </Card.Footer>
            </Card>
            
                {
                    transitions.map(({item, key, props})=> 
                        item && <animated.div key={key} style={props} className="invoice-form">
                        <div className="invoice-center">
                            
                            <Card>
                                <Card.Header className="text-right">
                                    <BsX onClick={ hideInvoiceForm } />
                                </Card.Header>
                                <Card.Body>
                                <Form>
                                <FormGroup>
                                    <Form.Label for="paid">Student Name</Form.Label>
                                    <FormControl type="text" placeholder="Kon Akech K0on"/>
                                </FormGroup>
                                <FormGroup>
                                    <Form.Label for="paid">Priviouse balance</Form.Label>
                                    <FormControl type="text" placeholder="1500"/>
                                </FormGroup>
                                <FormGroup>
                                    <Form.Label for="paid">Amount paid</Form.Label>
                                    <FormControl type="text" placeholder="0.0"/>
                                </FormGroup>
                                <FormGroup>
                                    <Form.Label for="paid"> Balance top be paid</Form.Label>
                                    <FormControl type="text" placeholder="3500"/>
                                </FormGroup>
                                <FormGroup>
                                    <Button variant="success">Save</Button>
                                    <Button variant="danger" onClick={ hideInvoiceForm }>Cancel</Button>
                                </FormGroup>
                            </Form>
                                </Card.Body>
                            </Card>
                        </div>
                    </animated.div>
                    )
                }
        </div>
    )
}
