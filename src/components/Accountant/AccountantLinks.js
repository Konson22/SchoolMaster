import React, { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Button, Form, FormGroup, FormControl, TabContainer, TabContent } from 'react-bootstrap'
import { BsClipboardData } from 'react-icons/bs'
import { FaDollarSign, FaCartPlus } from 'react-icons/fa'

export default function AccountantLinks() {
 
    return (
        <>
        <Row className="mb-4">
            <Col md={3}>
                <Card className="alert-danger p-2 shadow">
                    <Link className="nav-link text-dark" to="/accountant/fees">
                    <Card.Title>
                    <h4>Badget</h4>
                    </Card.Title>
                    <div className="main-gage-wraper">
                        <h1>451</h1>
                        <FaDollarSign className="gage-icon"/>
                    </div>
                    </Link>
                </Card>
            </Col>
            <Col md={3}>
                <Card className="alert-success p-2 shadow">
                    <Link className="nav-link text-dark" to="/accountant/fees">
                        <Card.Title>
                        <h4>Total income</h4>
                        </Card.Title>
                        <div className="main-gage-wraper">
                            <h1>451</h1>
                            <FaDollarSign className="gage-icon"/>
                        </div>
                    </Link>
                </Card>
            </Col>
            <Col md={3}>
                <Card className="alert-warning p-2 shadow">
                    <Link className="nav-link text-dark" to="/accountant/fees">
                        <Card.Title>
                        <h4>Total income</h4>
                        </Card.Title>
                        <div className="main-gage-wraper">
                            <h1>451</h1>
                            <FaDollarSign className="gage-icon"/>
                        </div>
                    </Link>
                </Card>
            </Col>
            <Col md={3}>
                <Card className="alert-info p-2 shadow">
                    <Link className="nav-link text-dark" to="/accountant/expenses">
                        <Card.Title>
                        <h4>Expenses</h4>
                        </Card.Title>
                        <div className="main-gage-wraper">
                            <h1> <span>SSP</span></h1>  
                            <FaCartPlus className="gage-icon"/>
                        </div>
                    </Link>
                </Card>
            </Col>
        </Row>
        
        </>
    )
}
