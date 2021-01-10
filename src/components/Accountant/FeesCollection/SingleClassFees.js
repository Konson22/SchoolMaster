import React, { useState, useEffect } from 'react'
import AccountantLinks from '../AccountantLinks'
import { useParams } from 'react-router-dom' 
import Loader from '../../Loader/Loader'


export default function SingleClassFees() {
    const {cName} = useParams()
    let splitedname = cName.split('-').join(' ')
    const [singleClass, setClass] = useState({
        status:false,
        data:null,
        error:false
    })

    useEffect(()=> {
        fetch(`/accountant/single-class-record/${splitedname}`).then(res => res.json()).then(data => setClass({
            status:true,
            data:data,
            error:false
        }))
    }, [])

    let content;
    if(singleClass.status){
        content = singleClass.data.map( student => (
            <tr>
            <td className="alert-secondary">{ student.name }</td>
                        <td className="alert-success">{ student.fees.firstTerm.paid }</td>
                        <td className="alert-success">{ student.fees.firstTerm.balance }</td>
                        <td className="alert-warning">{ student.fees.secondTerm.paid }</td>
                        <td className="alert-warning">{ student.fees.secondTerm.balance }</td>
                        <td className="alert-danger">{ +student.fees.firstTerm.paid + +student.fees.secondTerm.paid }</td>
                        <td className="alert-danger">{ +student.fees.firstTerm.balance + +student.fees.secondTerm.balance }</td>
                    </tr>
        ))
    }else{
        content = <Loader />
    }

    console.log(singleClass.data)
    return (
        <div>
            <AccountantLinks />
            <table className="table my-table table-boered">
                <thead>
                    <tr>
                        <th className="alert-secondary"></th>
                        <th colSpan="2" className="alert-success text-center">First term</th>
                        <th colSpan="2" className="alert-warning text-center">Second term</th>
                        <th colSpan="2" className="alert-danger text-center">Total</th>
                    </tr>
                    <tr className="bg-info">
                        <th className="alert-secondary">Student Name</th>
                        <th className="alert-success">Paid</th>
                        <th className="alert-success">Balance</th>
                        <th className="alert-warning">Paid</th>
                        <th className="alert-warning">Balance</th>
                        <th className="alert-danger">Paid</th>
                        <th className="alert-danger">Balance</th>
                    </tr>
                </thead>
                <tbody>
                    { content }
                </tbody>
            </table>
        </div>
    )
}
