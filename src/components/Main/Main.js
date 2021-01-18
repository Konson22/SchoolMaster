import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card } from 'react-bootstrap'
import { BsEnvelope, BsPersonCheckFill } from 'react-icons/bs'
import { FaUserGraduate, FaUserTie, FaCartPlus, FaMoneyBill } from 'react-icons/fa'
import './Main.css'
import Chartjs from '../Chartjs/Chartjs'
import {GlobalContext} from '../GlobalContext/GlobalContext'
import Notification from './Notification/Notification'

import 'bootstrap/dist/css/bootstrap.min.css'

export default function Main() {
    const rawData = useContext(GlobalContext)

    let feesPaid  = 0
    if(rawData.students.status){
        feesPaid = rawData.students.data.map(fees => fees.fees.paid).reduce((a, b) => +a + +b, 0)
    }
    let expenses  = 0
    if(rawData.expernse.status){
        expenses = rawData.expernse.data.map(expense => expense.price).reduce((a, b) => +a + +b, 0)
    }
    console.log(expenses)
    return (
        <>
        <section className="main-body">
            <Row className="m-0 p-0">
                <Col md={3}>
                    <Card className="bg-warning shadow p-2">
                        <Link className="nav-link text-white" to="/stuffs">
                            <Card.Title>
                                <h4>Stuffs</h4>
                            </Card.Title>
                            <div className="main-gage-wraper">
                                <FaUserTie className="gage-icon"/> 
                                <h1>{ rawData.stuffs.status ? rawData.stuffs.data.length : 0 }</h1>
                            </div>
                        </Link>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="bg-danger shadow p-2">
                        <Link className="nav-link text-white" to="/students">
                        <Card.Title>
                            <h4>Students</h4>
                        </Card.Title>
                            <div className="main-gage-wraper">
                                <FaUserGraduate className="gage-icon"/>
                                <h1>{ rawData.students.status ? rawData.students.data.length : 0 }</h1>
                            </div>
                        </Link>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="bg-success shadow p-2">
                        <Link className="nav-link text-white" to="/students">
                            <Card.Title>
                                <h4>Fees</h4>
                            </Card.Title>
                            <div className="main-gage-wraper">
                                <h1>{ feesPaid } <span>SSP</span></h1>
                                <FaMoneyBill className="gage-icon"/>
                            </div>
                        </Link>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="bg-info shadow p-2">
                        <Link className="nav-link text-dark" to="/accountant/expenses">
                            <Card.Title>
                            <h4>Expenses</h4>
                            </Card.Title>
                            <div className="main-gage-wraper">
                                <h1> { expenses } <span>SSP</span></h1>  
                                <FaCartPlus className="gage-icon"/>
                            </div>
                        </Link>
                    </Card>
                </Col>
            </Row>
            <article>
                <Row className="m-0 mt-4 p-0">
                    <Col md={6}>
                    <Notification />
                    </Col>
                    <Col md={6}>
                        <Card className="shadow p-2 alert- p-2">
                            <Card.Title>
                                <h3>Request box</h3>
                            </Card.Title>
                            <Chartjs />
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="shadow p-2 alert- p-2">
                            <Card.Title>
                                <h3>Request box</h3>
                            </Card.Title>
                            <Chartjs />
                        </Card>
                    </Col>
                </Row>
            </article>
        </section>
        </>
    )
}
