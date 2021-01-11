import React, { useState, useEffect, useContext } from 'react'
import { Card, Row, Col, Button, Form, FormGroup, FormControl } from 'react-bootstrap'
import { FaSave } from 'react-icons/fa'
import AccountantLinks from './AccountantLinks'
import Chartjs from '../Chartjs/Chartjs'
import {GlobalContext} from '../GlobalContext/GlobalContext'


import './Accountant.css'

export default function Accountant() {
    const data = useContext(GlobalContext)

    return (
        <>
        <AccountantLinks/>
        <Row>
            <Col md={6}>
                <Card>
                    <Chartjs />
                </Card>
            </Col>
            <Col md={6}>
                <Card>
                    <Chartjs />
                </Card>
            </Col>
            <Col md={7}>
                <Card className="alert-secondary">
                <Card.Body>
                    <h3>Expense entary form</h3>
                    <Form>
                        <FormGroup>
                            <FormControl type="text" placeholder="Item name"/>
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="text" placeholder="qty"/>
                        </FormGroup>
                        <FormGroup>
                            <select className="form-control">
                                <option>Piece</option>
                                <option>Bag</option>
                                <option>Carton</option>
                                <option>Kg</option>
                            </select>
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="text" placeholder="Price"/>
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="text" placeholder="Price/unit"/>
                        </FormGroup>
                        <FormGroup>
                            <FormControl type="text" placeholder="Price"/>
                        </FormGroup>
                        <FormGroup>
                            <Button className="btn btn-info" type="submit"><FaSave/> Save </Button>
                        </FormGroup>
                    </Form>
                </Card.Body>
                </Card>
            </Col>
        </Row>
        </>
    )
}
