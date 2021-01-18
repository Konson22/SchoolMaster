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
        fetch(`https://schoolmaster-api.herokuapp.com/students/profile/${id}`).then(res => res.json())
        .then( profile => setStudent({
            status:true,
            data:profile,
            error:false
        }))
    }, [])
    
    
    let content;
    if(student.status){
        content = student.data.map(student => 
                <Row>
                    <Col lg={4} md={6}>
                        <img className="profileImg" src={process.env.PUBLIC_URL + student.imgUrl} />
                    </Col>
                    <Col lg={4} md={6} >
                        <p>Name: { student.name }</p>
                        <p>Gender: { student.gender }</p>
                        <p>Birth Date:{ student.birthDate }</p>
                        <p>Address: { student.address }</p>
                        <p>Class/Primary: { student.class }</p>
                        <p>Graient Name: { student.gradientName }</p>
                        <p>Graient phone: { student.gradientContact }</p>
                    </Col>
                    <Col lg={4} md={6} >
                        <h4>Fees data</h4>
                        <p><b>Fees paid</b> { student.fees.paid } SSP </p>
                        <p><b>out standing fees</b> { student.fees.balance } SSP </p>
                        <Button className="btn btn-sm" variant="success" onClick={ handleInvoiceForm }>Invoice form</Button>
                    </Col>
                    <Col lg={4} md={6} >
                        <h4>First term</h4>
                        <table className="my-table">
                            <tr>
                                <th>Subject</th>
                                <th>Marks</th>
                                <th>pass marks</th>
                                <th>Student makrs</th>
                            </tr>
                            <tr>
                                <td>English</td>
                                <td>100</td>
                                <td>50</td>
                                <td>74</td>
                            </tr>
                            <tr>
                                <td>Math</td>
                                <td>100</td>
                                <td>50</td>
                                <td>74</td>
                            </tr>
                            <tr>
                                <td>CRE</td>
                                <td>100</td>
                                <td>50</td>
                                <td>74</td>
                            </tr>
                            <tr>
                                <td>History</td>
                                <td>100</td>
                                <td>50</td>
                                <td>74</td>
                            </tr>
                            <tr>
                                <td>Science</td>
                                <td>100</td>
                                <td>50</td>
                                <td>74</td>
                            </tr>
                            <tr>
                                <td>Social study</td>
                                <td>100</td>
                                <td>50</td>
                                <td>74</td>
                            </tr>
                        </table>
                    </Col>
                    <Col lg={4} md={6} >
                        <h4>First term</h4>
                        <table className="my-table">
                            <tr>
                                <th>Subject</th>
                                <th>Marks</th>
                                <th>pass marks</th>
                                <th>Student makrs</th>
                            </tr>
                            <tr>
                                <td>English</td>
                                <td>100</td>
                                <td>50</td>
                                <td>74</td>
                            </tr>
                            <tr>
                                <td>Math</td>
                                <td>100</td>
                                <td>50</td>
                                <td>74</td>
                            </tr>
                            <tr>
                                <td>CRE</td>
                                <td>100</td>
                                <td>50</td>
                                <td>74</td>
                            </tr>
                            <tr>
                                <td>History</td>
                                <td>100</td>
                                <td>50</td>
                                <td>74</td>
                            </tr>
                            <tr>
                                <td>Science</td>
                                <td>100</td>
                                <td>50</td>
                                <td>74</td>
                            </tr>
                            <tr>
                                <td>Social study</td>
                                <td>100</td>
                                <td>50</td>
                                <td>74</td>
                            </tr>
                        </table>
                    </Col>
                    <Col lg={4 } md={6} >
                        <h4>Final term</h4>
                        <table className="my-table">
                            <tr>
                                <th>Subject</th>
                                <th>Marks</th>
                                <th>pass marks</th>
                                <th>Student makrs</th>
                            </tr>
                            <tr>
                                <td>English</td>
                                <td>100</td>
                                <td>50</td>
                                <td>74</td>
                            </tr>
                            <tr>
                                <td>Math</td>
                                <td>100</td>
                                <td>50</td>
                                <td>74</td>
                            </tr>
                            <tr>
                                <td>CRE</td>
                                <td>100</td>
                                <td>50</td>
                                <td>74</td>
                            </tr>
                            <tr>
                                <td>History</td>
                                <td>100</td>
                                <td>50</td>
                                <td>74</td>
                            </tr>
                            <tr>
                                <td>Science</td>
                                <td>100</td>
                                <td>50</td>
                                <td>74</td>
                            </tr>
                            <tr>
                                <td>Social study</td>
                                <td>100</td>
                                <td>50</td>
                                <td>74</td>
                            </tr>
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
            
            <div className="p">
                <div className="mb-3 text-rght">
                    <Button className=" btn-sm" variant="success" onClick={ handleInvoiceForm }>Invoice form</Button>
                    <Button className=" btn-sm mx-2">Edit profile</Button>
                    <Button className=" btn-sm" variant="danger">Dismiss</Button>
                </div>
                <div>
                { content }
                </div>
            </div>
            
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
