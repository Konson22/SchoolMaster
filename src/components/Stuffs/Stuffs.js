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
            
            <tr>
                <td>{ stuff.name }</td>
                <td>{ stuff.gender }</td>
                <td>{ stuff.title }</td>
                <td>{ stuff.address }</td>
                <td>{ stuff.contact }</td>
                <td>
                    <button className="btn btn-info btn-sm">Profile</button>
                </td>
            </tr>
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
                <table className="table">
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
                </table>
            </div>
    </>
    )
}
