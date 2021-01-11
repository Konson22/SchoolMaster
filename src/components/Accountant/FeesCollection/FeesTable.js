import React from 'react'
import { Link } from 'react-router-dom'

export default function FeesTable({ filteredData }){
 
    console.log(filteredData.primary1)
    
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th colSpan="7" className="alert-"><h4>Fees collection record</h4></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Class</th>
                    <th>Student</th>
                    <th>Total paid</th>
                    <th>Balance</th>
                    <th>Actions</th>
                </tr>
                <tr>
                    <td>Primary one</td>
                    <td>{ filteredData.primary1.No }</td>
                    <td>{ filteredData.primary1.paid }</td>
                    <td>{ filteredData.primary1.balance }</td>
                    <td><Link to="/accountant/single-class-record/Primary-one" className="btn btn-info btn-sm">view record</Link></td>
                </tr>
                <tr>
                    <td>Primary two</td>
                    <td>{ filteredData.primary2.No }</td>
                    <td>{ filteredData.primary2.paid }</td>
                    <td>{ filteredData.primary2.balance }</td>
                    <td><Link to="/accountant/single-class-record/Primary-two" className="btn btn-info btn-sm">view record</Link></td>
                </tr>
             

            </tbody>
        </table>
    )
}
