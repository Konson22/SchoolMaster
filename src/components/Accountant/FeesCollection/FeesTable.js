import React from 'react'
import { Link } from 'react-router-dom'

export default function FeesTable({ filteredData }){
   
    return (
        <table className="my-table table-striped">
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
                    <th className="text-right pr-4">Actions</th>
                </tr>

                <tr>
                    <td>Primary one</td>
                    <td>{ filteredData.primary1.No }</td>
                    <td>{ filteredData.primary1.paid }</td>
                    <td>{ filteredData.primary1.balance }</td>
                    <td className="text-right pr-4"><Link to="/SchoolMaster/single-class-record/Primary-one" className="text-danger">view record</Link></td>
                </tr>
                <tr>
                    <td>Primary two</td>
                    <td>{ filteredData.primary2.No }</td>
                    <td>{ filteredData.primary2.paid }</td>
                    <td>{ filteredData.primary2.balance }</td>
                    <td className="text-right pr-4"><Link to="/SchoolMaster/single-class-record/Primary-two" className="">view record</Link></td>
                </tr>
                <tr>
                    <td>Primary three</td>
                    <td>{ filteredData.primary3.No }</td>
                    <td>{ filteredData.primary3.paid }</td>
                    <td>{ filteredData.primary3.balance }</td>
                    <td className="text-right pr-4"><Link to="/SchoolMaster/single-class-record/Primary-three" className="">view record</Link></td>
                </tr>
                <tr>
                    <td>Primary four</td>
                    <td>{ filteredData.primary4.No }</td>
                    <td>{ filteredData.primary4.paid }</td>
                    <td>{ filteredData.primary4.balance }</td>
                    <td className="text-right pr-4"><Link to="/SchoolMaster/single-class-record/Primary-four" className="">view record</Link></td>
                </tr>
                <tr>
                    <td>Primary five</td>
                    <td>{ filteredData.primary5.No }</td>
                    <td>{ filteredData.primary5.paid }</td>
                    <td>{ filteredData.primary5.balance }</td>
                    <td className="text-right pr-4"><Link to="/SchoolMaster/single-class-record/Primary-five" className="">view record</Link></td>
                </tr>
                <tr>
                    <td>Primary six</td>
                    <td>{ filteredData.primary6.No }</td>
                    <td>{ filteredData.primary6.paid }</td>
                    <td>{ filteredData.primary6.balance }</td>
                    <td className="text-right pr-4"><Link to="/SchoolMaster/single-class-record/Primary-six" className="">view record</Link></td>
                </tr>
                <tr>
                    <td>Primary seven</td>
                    <td>{ filteredData.primary7.No }</td>
                    <td>{ filteredData.primary7.paid }</td>
                    <td>{ filteredData.primary7.balance }</td>
                    <td className="text-right pr-4"><Link to="/SchoolMaster/single-class-record/Primary-seven" className="">view record</Link></td>
                </tr>
                <tr>
                    <td>Primary eight</td>
                    <td>{ filteredData.primary8.No }</td>
                    <td>{ filteredData.primary8.paid }</td>
                    <td>{ filteredData.primary8.balance }</td>
                    <td className="text-right pr-4"><Link to="/SchoolMaster/single-class-record/Primary-eight" className="">view record</Link></td>
                </tr>
            </tbody>
        </table>
    )
}
