import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { BsPencil, BsTrash } from 'react-icons/bs'
import AccountantLinks from '../AccountantLinks'
import {GlobalContext} from '../../GlobalContext/GlobalContext'


import Loader from '../../Loader/Loader'
import './Expense.css'

export default function Expense() {
    const reqData = useContext(GlobalContext)
    let content;
    if(reqData.expernse.status){
        content = reqData.expernse.data.map(expense => (
        <tr>
            <td>{expense.date}</td>
                <td>{ expense.itemName }</td>
                <td>{expense.qty}</td>
                <td>{expense.unit}</td>
                <td>{expense.pricePerUnit} SSP</td>
                <td>{expense.totalPrice} SSP</td>
                <td className="text-right">
                    <Link className="btn btn-sm btn-success" to=""><BsPencil /> Edit</Link>
                    <Link className="btn btn-sm btn-danger ml-2" to=""><BsTrash /> remove</Link>
                </td>
            </tr>
        ))
    }else{
        content = <Loader />
    }

    return (
        <div>
            <AccountantLinks />
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Item name</th>
                            <th>Qty</th>
                            <th>Unit</th>
                            <th>Price per unit</th>
                            <th>Total price</th>
                            <th className="text-center">Actions</th>
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
