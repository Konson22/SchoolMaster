import React from 'react'
import { Link } from 'react-router-dom'

export default function FeesTable({ filteredData }){
    return (
        <table className="table table-striped">
            <thead >
                <tr>
                    <th colSpan="7" className="alert-"><h4>Fees collection record</h4></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Class</th>
                    <th>Student</th>
                    <th>First term</th>
                    <th>Second term</th>
                    <th>Total paid</th>
                    <th>Balance</th>
                    <th>Actions</th>
                </tr>
                <tr>
                    <td>Primary one</td>
                    <td>{ filteredData.pr1.length }</td>
                    <td>{ filteredData.pr1.map(paid => paid.fees.firstTerm.paid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.pr1.map(paid => paid.fees.secondTerm.paid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.pr1.map(paid => paid.fees.firstTerm.paid).reduce((amount, count) => +amount + +count, 0) + filteredData.pr1.map(paid => paid.fees.secondTerm.paid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.pr1.map(paid => paid.fees.firstTerm.balance).reduce((amount, count) => +amount + +count, 0) + filteredData.pr1.map(paid => paid.fees.secondTerm.balance).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td><Link className="btn btn-info btn-sm" to="/accountant/single-class-record/Primary-one">View record</Link></td>
                </tr>
                <tr>
                    <td>Primary two</td>
                    <td>{ filteredData.pr2.length }</td>
                    <td>{ filteredData.pr2.map(paid => paid.fees.firstTerm.paid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.pr2.map(paid => paid.fees.secondTerm.paid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.pr2.map(paid => paid.fees.firstTerm.paid).reduce((amount, count) => +amount + +count, 0) + filteredData.pr2.map(paid => paid.fees.secondTerm.paid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.pr2.map(paid => paid.fees.firstTerm.balance).reduce((amount, count) => +amount + +count, 0) + filteredData.pr2.map(paid => paid.fees.secondTerm.balance).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td><Link className="btn btn-info btn-sm" to="/accountant/single-class-record/Primary-one">View record</Link></td>
                </tr>
                <tr>
                    <td>Primary three</td>
                    <td>{ filteredData.pr3.length }</td>
                    <td>{ filteredData.pr3.map(paid => paid.fees.firstTerm.paid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.pr3.map(paid => paid.fees.secondTerm.paid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.pr3.map(paid => paid.fees.firstTerm.paid).reduce((amount, count) => +amount + +count, 0) + filteredData.pr3.map(paid => paid.fees.secondTerm.paid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.pr3.map(paid => paid.fees.firstTerm.balance).reduce((amount, count) => +amount + +count, 0) + filteredData.pr3.map(paid => paid.fees.secondTerm.balance).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td><Link className="btn btn-info btn-sm" to="/accountant/single-class-record/Primary-one">View record</Link></td>
                </tr>
                <tr>
                    <td>Primary four</td>
                    <td>{ filteredData.pr4.length }</td>
                    <td>{ filteredData.pr4.map(paid => paid.fees.firstTerm.paid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.pr4.map(paid => paid.fees.secondTerm.paid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.pr4.map(paid => paid.fees.firstTerm.paid).reduce((amount, count) => +amount + +count, 0) + filteredData.pr4.map(paid => paid.fees.secondTerm.paid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.pr4.map(paid => paid.fees.firstTerm.balance).reduce((amount, count) => +amount + +count, 0) + filteredData.pr4.map(paid => paid.fees.secondTerm.balance).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td><Link className="btn btn-info btn-sm" to="/accountant/single-class-record/Primary-one">View record</Link></td>
                </tr>
              
                <tr>
                    <td>Primary five</td>
                    <td>{ filteredData.pr5.length }</td>
                    <td>{ filteredData.pr6.map(paid => paid.fees.firstTerm.paid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.pr6.map(paid => paid.fees.secondTerm.paid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.pr6.map(paid => paid.fees.firstTerm.paid).reduce((amount, count) => +amount + +count, 0) + filteredData.pr6.map(paid => paid.fees.secondTerm.paid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.pr6.map(paid => paid.fees.firstTerm.balance).reduce((amount, count) => +amount + +count, 0) + filteredData.pr6.map(paid => paid.fees.secondTerm.balance).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td><Link className="btn btn-info btn-sm" to="/accountant/single-class-record/Primary-one">View record</Link></td>
                </tr>
                <tr>
                    <td>Primary six</td>
                    <td>{ filteredData.pr6.length }</td>
                    <td>{ filteredData.pr6.map(paid => paid.fees.firstTerm.paid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.pr6.map(paid => paid.fees.secondTerm.paid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.pr6.map(paid => paid.fees.firstTerm.paid).reduce((amount, count) => +amount + +count, 0) + filteredData.pr6.map(paid => paid.fees.secondTerm.paid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.pr6.map(paid => paid.fees.firstTerm.balance).reduce((amount, count) => +amount + +count, 0) + filteredData.pr6.map(paid => paid.fees.secondTerm.balance).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td><Link className="btn btn-info btn-sm" to="/accountant/single-class-record/Primary-one">View record</Link></td>
                </tr>
{/* 
                <tr>
                    <td>Primary two</td>
                    <td>{ filteredData.pr2.length }</td>
                    <td>{ filteredData.pr2.map(paid => paid.firstTermPaid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.pr2.map(paid => paid.secondTermPaid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.pr2.map(paid => paid.firstTermPaid).reduce((amount, count) => +amount + +count, 0) + filteredData.pr2.map(paid => paid.secondTermPaid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ (25000 * filteredData.pr2.length) - (filteredData.pr2.map(paid => paid.secondTermPaid).reduce((amount, count) => +amount + +count, 0) + filteredData.pr2.map(paid => paid.firstTermPaid).reduce((amount, count) => +amount + +count, 0)) } SSP</td>
                    <td><Link className="btn btn-info btn-sm" to="/accountant/single-class-record/Primary-two">View record</Link></td>
                </tr>
                
                <tr>
                    <td>Primary three</td>
                    <td>{ filteredData.pr3.length }</td>
                    <td>{ filteredData.pr3.map(paid => paid.firstTermPaid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.pr3.map(paid => paid.secondTermPaid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.pr3.map(paid => paid.firstTermPaid).reduce((amount, count) => +amount + +count, 0) + filteredData.pr3.map(paid => paid.secondTermPaid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ (25000 * filteredData.pr3.length) - (filteredData.pr3.map(paid => paid.secondTermPaid).reduce((amount, count) => +amount + +count, 0) + filteredData.pr3.map(paid => paid.firstTermPaid).reduce((amount, count) => +amount + +count, 0)) } SSP</td>
                    <td><Link className="btn btn-info btn-sm" to="/accountant/single-class-record/Primary-three">View record</Link></td>
                </tr>
                <tr>
                    <td>Primary four</td>
                    <td>{ filteredData.pr4.length }</td>
                    <td>{ filteredData.pr4.map(paid => paid.firstTermPaid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.pr4.map(paid => paid.secondTermPaid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.pr4.map(paid => paid.firstTermPaid).reduce((amount, count) => +amount + +count, 0) + filteredData.pr4.map(paid => paid.secondTermPaid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ (25000 * filteredData.pr4.length) - (filteredData.pr4.map(paid => paid.secondTermPaid).reduce((amount, count) => +amount + +count, 0) + filteredData.pr4.map(paid => paid.firstTermPaid).reduce((amount, count) => +amount + +count, 0)) } SSP</td>
                    <td><Link className="btn btn-info btn-sm" to="/accountant/single-class-record/Primary-four">View record</Link></td>
                </tr>
                <tr>
                    <td>Primary five</td>
                    <td>{ filteredData.pr5.length }</td>
                    <td>{ filteredData.pr5.map(paid => paid.firstTermPaid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.pr5.map(paid => paid.secondTermPaid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.pr5.map(paid => paid.firstTermPaid).reduce((amount, count) => +amount + +count, 0) + filteredData.pr5.map(paid => paid.secondTermPaid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ (25000 * filteredData.pr5.length) - (filteredData.pr5.map(paid => paid.secondTermPaid).reduce((amount, count) => +amount + +count, 0) + filteredData.pr5.map(paid => paid.firstTermPaid).reduce((amount, count) => +amount + +count, 0)) } SSP</td>
                    <td><Link className="btn btn-info btn-sm" to="/accountant/single-class-record/Primary-five">View record</Link></td>
                </tr>
                <tr>
                    <td>Primary six</td>
                    <td>{ filteredData.pr6.length }</td>
                    <td>{ filteredData.pr6.map(paid => paid.firstTermPaid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.pr6.map(paid => paid.secondTermPaid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.pr6.map(paid => paid.firstTermPaid).reduce((amount, count) => +amount + +count, 0) + filteredData.pr6.map(paid => paid.secondTermPaid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ (25000 * filteredData.pr6.length) - (filteredData.pr6.map(paid => paid.secondTermPaid).reduce((amount, count) => +amount + +count, 0) + filteredData.pr6.map(paid => paid.firstTermPaid).reduce((amount, count) => +amount + +count, 0)) } SSP</td>
                    <td><Link className="btn btn-info btn-sm" to="/accountant/single-class-record/Primary-six">View record</Link></td>
                </tr>
                <tr>
                    <td>Primary seven</td>
                    <td>{ filteredData.pr7.length }</td>
                    <td>{ filteredData.pr7.map(paid => paid.firstTermPaid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.pr7.map(paid => paid.secondTermPaid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.pr7.map(paid => paid.firstTermPaid).reduce((amount, count) => +amount + +count, 0) + filteredData.pr7.map(paid => paid.secondTermPaid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ (25000 * filteredData.pr7.length) - (filteredData.pr7.map(paid => paid.secondTermPaid).reduce((amount, count) => +amount + +count, 0) + filteredData.pr7.map(paid => paid.firstTermPaid).reduce((amount, count) => +amount + +count, 0)) } SSP</td>
                    <td><Link className="btn btn-info btn-sm" to="/accountant/single-class-record/Primary-seven">View record</Link></td>
                </tr>
                <tr>
                    <td>Primary eight</td>
                    <td>{ filteredData.pr8.length }</td>
                    <td>{ filteredData.pr8.map(paid => paid.firstTermPaid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.pr8.map(paid => paid.secondTermPaid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.pr8.map(paid => paid.firstTermPaid).reduce((amount, count) => +amount + +count, 0) + filteredData.pr8.map(paid => paid.secondTermPaid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ (25000 * filteredData.pr8.length) - (filteredData.pr8.map(paid => paid.secondTermPaid).reduce((amount, count) => +amount + +count, 0) + filteredData.pr8.map(paid => paid.firstTermPaid).reduce((amount, count) => +amount + +count, 0)) } SSP</td>
                    <td><Link className="btn btn-info btn-sm" to="/accountant/single-class-record/Primary-eight">View record</Link></td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>{ filteredData.allClasses.length }</td>
                    <td>{ filteredData.allClasses.map(paid => paid.firstTermPaid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.allClasses.map(paid => paid.secondTermPaid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ filteredData.allClasses.map(paid => paid.firstTermPaid).reduce((amount, count) => +amount + +count, 0) + filteredData.allClasses.map(paid => paid.secondTermPaid).reduce((amount, count) => +amount + +count, 0) } SSP</td>
                    <td>{ (25000 * filteredData.allClasses.length) - (filteredData.allClasses.map(paid => paid.secondTermPaid).reduce((amount, count) => +amount + +count, 0) + filteredData.allClasses.map(paid => paid.firstTermPaid).reduce((amount, count) => +amount + +count, 0)) } SSP</td>
                    <td><Link className="btn btn-info btn-sm" to="/accountant/single-class-record/Primary-one">View record</Link></td>
                </tr> */}
            </tbody>
        </table>
    )
}
