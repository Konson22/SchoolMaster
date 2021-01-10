import React, { useState, useEffect, useContext } from 'react'
import AccountantLinks from '../AccountantLinks'
import Loader from '../../Loader/Loader'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { FaSave, FaPrint } from 'react-icons/fa'
import {GlobalContext} from '../../GlobalContext/GlobalContext'

import FeesTable from './FeesTable'
import './FeesCollection.css'

export default function FeesCollection() {
    const classData = useContext(GlobalContext)

    let content 
    if(classData.students.status){
        let allClasses = classData.students.data
        let pr1 =  classData.students.data.filter(className => className.class == "Primary one")
        let pr2 =  classData.students.data.filter(className => className.class == "Primary two")
        let pr3 =  classData.students.data.filter(className => className.class == "Primary three")
        let pr4 =  classData.students.data.filter(className => className.class == "Primary four")
        let pr5 =  classData.students.data.filter(className => className.class == "Primary five")
        let pr6 =  classData.students.data.filter(className => className.class == "Primary six")
        let pr7 =  classData.students.data.filter(className => className.class == "Primary seven")
        let pr8 =  classData.students.data.filter(className => className.class == "Primary eight")
        let filteredData = {pr1, pr2, pr3, pr4, pr5, pr6, pr7, pr8, allClasses}

        content = <FeesTable filteredData={ filteredData }/>
    }else{
        content = <Loader />
    }
    return (
        <div>
            <AccountantLinks/>
            <Row>
            <Col md={8}>
                <Card>
                    { content }
                </Card>
            </Col>
            <Col md={6}>
                <Card>
                    {/* <FeesTable  /> */}
                </Card>
            </Col>
            </Row>
        </div>
    )
}
