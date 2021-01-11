import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card } from 'react-bootstrap'
import { BsPeople, BsEnvelope, BsPersonCheckFill } from 'react-icons/bs'
import { FaUserGraduate, FaUserTie } from 'react-icons/fa'
import './Main.css'
import Chartjs from '../Chartjs/Chartjs'
import {GlobalContext} from '../GlobalContext/GlobalContext'
import Notification from './Notification/Notification'



import 'bootstrap/dist/css/bootstrap.min.css'


export default function Main() {
    const rawData = useContext(GlobalContext)
    // console.log(rawData.stuffs.data.length)
    return (
        <>
        <section className="main-body">
            <Row className="m-0 p-0">
                <Col md={3}>
                    <Card className="bg-warning shadow">
                        <Link className="nav-link text-white" to="/stuffs">
                            <Card.Title>
                                <h4>Stuffs</h4>
                            </Card.Title>
                            <div className="main-gage-wraper">
                                <FaUserTie className="gage-icon"/> 
                                <h1>{ rawData.stuffs.status ? rawData.stuffs.data.length : 0 }</h1>
                            </div>
                            <div className="mt-3 text-center">
                                <b>Pending request 3</b>
                            </div>
                        </Link>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="bg-danger shadow">
                        <Link className="nav-link text-white" to="/students">
                        <Card.Title>
                            <h4>Students</h4>
                        </Card.Title>
                            <div className="main-gage-wraper">
                                <FaUserGraduate className="gage-icon"/>
                                <h1>{ rawData.students.status ? rawData.students.data.length : 0 }</h1>
                            </div>
                            <div className="mt-3 text-center">
                                <b>Pending request 3</b>
                            </div>
                        </Link>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="bg-success shadow">
                        <Link className="nav-link text-white" to="/students">
                            <Card.Title>
                                <h4>Parents</h4>
                            </Card.Title>
                            <div className="main-gage-wraper">
                                <BsPeople className="gage-icon"/>
                                <h1>0</h1>
                            </div>
                            <div className="mt-3 text-center">
                                <b>Pending request 3</b>
                            </div>
                        </Link>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="bg-info shadow">
                        <Link className="nav-link text-white" to="/students">
                            <Card.Title>
                                <h4>Stuffs</h4>
                            </Card.Title>
                            <div className="main-gage-wraper">
                                <BsPersonCheckFill className="gage-icon"/>
                                <h1>240</h1>
                            </div>
                            <div className="mt-3 text-center">
                                <b>Pending request 3</b>
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
                        <Card className="shadow alert- p-2">
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
