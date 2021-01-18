import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Button, Col } from 'react-bootstrap'
import { BsPersonPlus, BsPen, BsTrash, BsEye, BsSearch } from 'react-icons/bs'
import {GlobalContext} from '../GlobalContext/GlobalContext'
import Loader from '../Loader/Loader'


import './Stuffs.css'

export default function Stuffs() {
    const data = useContext(GlobalContext)
    let container

    (data.stuffs.status)?
        container =  data.stuffs.data.map(stuff => 
            <Col md={2}>
                        <Card>
                            <div className="stuff-profile">
                                <div className="stuff-img-wraper">
                                    <img className="stufImg" src={process.env.PUBLIC_URL + '/images/kon1.jpg'} />
                                </div>
                                <div className="stuff-info">
                                    <b>Kon Akech Kon</b>
                                    <br/><span> Teacher </span>
                                </div>
                            </div>
                            <div className="stuff-info">
                                <h4 className="btn btn-sm btn-info">Profile</h4>
                                <h4 className="btn btn-sm btn-info">Resume</h4>
                                <h4 className="btn btn-sm btn-info">table</h4>
                            </div>
                        </Card>
                    </Col>
            // <tr>
            //     <td>{ stuff.name }</td>
            //     <td>{ stuff.gender }</td>
            //     <td>{ stuff.title }</td>
            //     <td>{ stuff.address }</td>
            //     <td>{ stuff.contact }</td>
            //     <td>
            //         <button className="btn btn-info btn-sm">Profile</button>
            //     </td>
            // </tr>
        )
    : container = <Loader />
    console.log(data.stuffs.data)
    return (
        <>
            <div>
                <Button><BsEye /> View all Teacher</Button>
                <Button><BsPersonPlus /> Add Teacher</Button>
                <Button><BsPersonPlus /> Approve Teacher</Button>
            </div>
            <div className="stuff-table">
                <Row>
                { container }
                </Row>
                {/* <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Title</th>
                            <th>Address</th>
                            <th>Contact</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { container }
                    </tbody>
                </table> */}
            </div>
    </>
    )
}
