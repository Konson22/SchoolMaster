import React, { useState, useEffect, useContext }  from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Button, Form, FormGroup, FormControl, TabContainer, TabContent } from 'react-bootstrap'
import { BsClipboardData } from 'react-icons/bs'
import { FaDollarSign, FaCartPlus } from 'react-icons/fa'
import {GlobalContext} from '../GlobalContext/GlobalContext'


export default function AccountantLinks() {
    const propsData = useContext(GlobalContext)
    const paid = propsData.students.data.map(data => data.fees.paid).reduce((fees, total) => +fees + +total, 0)
    const balance = propsData.students.data.map(data => data.fees.balance).reduce((fees, total) => +fees + +total, 0)
    const expernse = propsData.expernse.data.map(data => data.totalPrice).reduce((fees, total) => +fees + +total, 0)

    return (
        <>
        <Row className="mb-4">
            <Col md={4}>
                <Card className="alert-success p-2 shadow">
                    <Link className="nav-link text-dark" to="/accountant/fees">
                        <Card.Title>
                        <h4>Total paid</h4>
                        </Card.Title>
                        <div className="main-gage-wraper">
                            <h1>{ paid } <span>SSP</span></h1>
                            <FaDollarSign className="gage-icon"/>
                        </div>
                    </Link>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="alert-warning p-2 shadow">
                    <Link className="nav-link text-dark" to="/accountant/fees">
                        <Card.Title>
                        <h4>Outstanding fees</h4>
                        </Card.Title>
                        <div className="main-gage-wraper">
                            <h1>{ balance } <span>SSP</span></h1>
                            <FaDollarSign className="gage-icon"/>
                        </div>
                    </Link>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="alert-info p-2 shadow">
                    <Link className="nav-link text-dark" to="/accountant/expenses">
                        <Card.Title>
                        <h4>Expenses</h4>
                        </Card.Title>
                        <div className="main-gage-wraper">
                            <h1> { expernse } <span>SSP</span></h1>  
                            <FaCartPlus className="gage-icon"/>
                        </div>
                    </Link>
                </Card>
            </Col>
        </Row>
        
        </>
    )
}
