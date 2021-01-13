import React, { useState, useEffect } from 'react'
import AccountantLinks from '../AccountantLinks'
import { useParams, Link } from 'react-router-dom' 
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
        fetch(`https://schoolmaster-api.herokuapp.com/accountant/single-class-record/${splitedname}`).then(res => res.json()).then(data => setClass({
            status:true,
            data:data,
            error:false
        }))
    }, [])

    let content
     content = (singleClass.status) ? singleClass.data.map( student => (
            <tr>
                <td className="">{ student.name }</td>
                <td className="">{ student.fees.paid }</td>
                <td className="">{ student.fees.balance }</td>
                <td className="">
                    <Link className="btn btn-info btn-sm mr-2" to={`/profile/${student._id}`}>show Profile</Link>
                <button className="btn btn-warning btn-sm">Invoice form</button>
                </td>
            </tr> 
            )) : content = <Loader />


    return (
        <div>
            <AccountantLinks />
            <div className="table-container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th className="">Student Name</th>
                        <th className="">Paid</th>
                        <th className="">Balance</th>
                        <th className="">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { content }
                </tbody>
            </table>
            </div>
        </div>
    )
}
