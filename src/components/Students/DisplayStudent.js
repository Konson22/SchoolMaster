import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonGroup, FormControl, Button, Table } from 'react-bootstrap'
import { BsPersonPlus, BsPen, BsTrash, BsPerson, BsSearch } from 'react-icons/bs'

export default function DisplayStudent({ students }) {
    return (
        <tbody>
            {
                students.map(student => (
                    <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>{student.gender}</td>
                        <td>{student.class}</td>
                        <td>{student.gradientName}</td>
                        <td>{student.gradientContact}</td>
                        <td>{student.fees.balance}</td>
                        <td className="text-right">
                            <Link className="btn btn-info btn-sm" to={`/profile/${student._id}`}><BsPerson /> Profile</Link> 
                            <button className="btn btn-info btn-sm mx-2"><BsPen /> Edit</button> 
                            <button className="btn btn-danger btn-sm"><BsTrash /> Delete</button>
                        </td>
                    </tr>
                ))
            }
                    
                </tbody>
    )
}
