import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ButtonGroup, FormControl, Button, Table } from 'react-bootstrap'
import { BsPersonPlus, BsPen, BsTrash, BsPerson, BsSearch } from 'react-icons/bs'
import Profile from './Profile'
import DisplayStudent from './DisplayStudent'
import Loader from '../Loader/Loader'
import {GlobalContext} from '../GlobalContext/GlobalContext'


import './Students.css'

export default function Students() {
    const [students, setStudents] = useState({
        status:false,
        data:null,
        error:false
    })
    const {cName} = useParams()
    let splitedData = cName.split('-').join(' ')
    useEffect( ()=> {
        setStudents({
            status:false,
            data:null,
            error:false
        })
        fetch(`https://schoolmaster-api.herokuapp.com/accountant/single-class-record/${splitedData}`).then(res => res.json()).then(data => setStudents({
            status:true,
            data:data,
            error:false
        }))
    }, [cName])
    
    let content;
    if(students.status){
        if(students.data.length != 0){
            content = <DisplayStudent students={ students.data } />
        }else{
            content = <div>
                <h2>No Students in { cName }</h2>
                </div>
        }
    }
    if(!students.status){
        content = <Loader />
    }

    return (
        <>
        <div className="student-header">
            <div>
                <Link className="btn btn-primary btn-sm" to="/registerForm"><BsPersonPlus /> new</Link>
                <select className="btn btn-primary ml-2 btn-sm">
                    <option>Primary one</option>
                    <option>Primary one</option>
                    <option>Primary one</option>
                    <option>Primary one</option>
                    <option>Primary one</option>
                    <option>Primary one</option>
                    <option>Primary one</option>
                    <option>Primary one</option>
                    <option>Primary one</option>
                </select>
            </div>
            <ButtonGroup>
                <FormControl type="text" placeholder="Search.."/>
                <Button><BsSearch /></Button>
            </ButtonGroup>
        </div>

        <div className="stuent-table mt-4">
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Class</th>
                        <th>Gradient</th>
                        <th>Gradient Contact</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                { content }
            </Table>
        </div>
        </>
    )
}
