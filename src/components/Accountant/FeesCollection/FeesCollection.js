import React, { useState, useEffect, useContext } from 'react'
import AccountantLinks from '../AccountantLinks'
import Loader from '../../Loader/Loader'
import { Row, Col, Card} from 'react-bootstrap'
import { FaSave, FaPrint } from 'react-icons/fa'
import {GlobalContext} from '../../GlobalContext/GlobalContext'

import FeesTable from './FeesTable'
import './FeesCollection.css'

export default function FeesCollection() {
    const classData = useContext(GlobalContext)

    let content 
    if(classData.students.status){
        let allClasses = classData.students.data
        const all = {paid:allClasses.map(paid => paid.fees.paid).reduce((amount, total)=> +amount + +total, 0), balance:allClasses.map(balance => balance.fees.balance).reduce((amount, total)=> +amount + +total, 0)}

        let pr1 =  classData.students.data.filter(className => className.class == "Primary one")
        const primary1 = {No:pr1.length, paid:pr1.map(paid => paid.fees.paid).reduce((amount, total)=> +amount + +total, 0), balance:pr1.map(balance => balance.fees.balance).reduce((amount, total)=> +amount + +total, 0)}
        
        let pr2 =  classData.students.data.filter(className => className.class == "Primary two")
        const primary2 = {No:pr2.length, paid:pr2.map(paid => paid.fees.paid).reduce((amount, total)=> +amount + +total, 0), balance:pr2.map(balance => balance.fees.balance).reduce((amount, total)=> +amount + +total, 0)}
        let pr3 =  classData.students.data.filter(className => className.class == "Primary three")
        const primary3 = {paid:pr3.map(paid => paid.fees.paid).reduce((amount, total)=> +amount + +total, 0), balance:pr3.map(balance => balance.fees.balance).reduce((amount, total)=> +amount + +total, 0)}
        let pr4 =  classData.students.data.filter(className => className.class == "Primary four")
        const primary4 = {paid:pr4.map(paid => paid.fees.paid).reduce((amount, total)=> +amount + +total, 0), balance:pr4.map(balance => balance.fees.balance).reduce((amount, total)=> +amount + +total, 0)}

        let pr5 =  classData.students.data.filter(className => className.class == "Primary five")
        const primary5 = {paid:pr5.map(paid => paid.fees.paid).reduce((amount, total)=> +amount + +total, 0), balance:pr5.map(balance => balance.fees.balance).reduce((amount, total)=> +amount + +total, 0)}

        let pr6 =  classData.students.data.filter(className => className.class == "Primary six")
        const primary6 = {paid:pr6.map(paid => paid.fees.paid).reduce((amount, total)=> +amount + +total, 0), balance:pr6.map(balance => balance.fees.balance).reduce((amount, total)=> +amount + +total, 0)}

        let pr7 =  classData.students.data.filter(className => className.class == "Primary seven")
        const primary7 = {paid:pr7.map(paid => paid.fees.paid).reduce((amount, total)=> +amount + +total, 0), balance:pr7.map(balance => balance.fees.balance).reduce((amount, total)=> +amount + +total, 0)}

        let pr8 =  classData.students.data.filter(className => className.class == "Primary eight")
        const primary8 = {paid:pr8.map(paid => paid.fees.paid).reduce((amount, total)=> +amount + +total, 0), balance:pr8.map(balance => balance.fees.balance).reduce((amount, total)=> +amount + +total, 0)}

        let filteredData = {primary1, primary2, primary3, primary4, primary5, primary6, primary7, primary8, all}

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
      
                </Card>
            </Col>
            </Row>
        </div>
    )
}
