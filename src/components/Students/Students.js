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
        content = (students.data.length != 0) ? <DisplayStudent students={ students.data } />: <h2>No Students in { cName }</h2>
    }
    if(!students.status){
        content = <Loader />
    }

    const search = async () => {
        // fetch(`/accountant/single-student/${1}`).then(res => res.json()).then(data => setStudents({
        //     status:true,
        //     data:data,
        //     error:false
        //  }))
        let info = await students.data.find(std => std.id == "11")
        console.log(info)
    }
    return (
        <>
        <div className="student-header">
            <div>
                <Link className="btn btn-primary btn-sm" to="/registerForm"><BsPersonPlus /> new</Link>
            </div>
            <ButtonGroup>
                <FormControl type="text" placeholder="Search.."/>
                <Button  onClick={ search }><BsSearch /></Button>
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
                        <th>Outstanding balance</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                { content }
            </Table>
        </div>
        </>
    )
}
