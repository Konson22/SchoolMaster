import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, Form, FormGroup, FormControl } from 'react-bootstrap'
import { BsPencil, BsTrash } from 'react-icons/bs'
import { FaSave } from 'react-icons/fa'
import { useTransition, animated } from 'react-spring'
import {GlobalContext} from '../../GlobalContext/GlobalContext'
import ExpenseForm from './ExpenseForm'


import Loader from '../../Loader/Loader'
import './Expense.css'

export default function Expense() {
    const [process, setProcess] = useState(false)

    const [expernse, setExpernse] = useState({
        status:false,
        data:null,
        error:false
    })
    useEffect(()=> {
        fetch('https://schoolmaster-api.herokuapp.com/expernses').then(res => res.json()).then(data => setExpernse({
            status:true,
            data:data,
            error:false
        }))
    }, [process])

    let content;
    const handleDelete = (e) => {
        setProcess(true)
        fetch(`/deleteExpense/${e.target.id}`).then(res => res.json()).then(data => {
            setProcess(false)
        })
    }
    if(expernse.status){
        content = expernse.data.map(expense => (
        <tr>
            <td>{expense.uploadDate }</td>
                <td>{ expense.itemName }</td>
                <td>{expense.qty}</td>
                <td>{expense.unit}</td>
                <td>{Math.floor(expense.price / expense.qty)} SSP</td>
                <td>{expense.price} SSP</td>
                <td className="text-right">
                    <Link className="btn btn-sm btn-success" to=""><BsPencil /> Edit</Link>
                    <button className="btn btn-sm btn-danger ml-2" id={expense._id} onClick={ handleDelete }><BsTrash /> remove</button>
                </td>
            </tr>
        ))
    }else{
        content = <Loader />
    }
    const [showForm, setShowForm] = useState(false)

    const transitions = useTransition(showForm, null, {
        from:{opacity:0, transform:'translateY(-100%)'},
        enter:{opacity:1, transform:'translate(0)'},
        leave:{opacity:0, transform:'translateY(-100%)'}
    })

  
    // toggling expense etery form function 
    const toggelForm = () => setShowForm(!showForm)
    return (
            <div className="expense-wraper">
                <div>
                    <Button onClick={ toggelForm }>Add</Button>
                </div>
                <div className="expense-table ">
                    <h3>Expense record list</h3>
                    <table className="my-table table-striped">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Item name</th>
                                <th>Qty</th>
                                <th>Unit</th>
                                <th>Price per unit</th>
                                <th>Toal price</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        { content }
                        </tbody>
                    </table>
                </div>
                {
                    transitions.map(({item, key, props})=> 
                        item && <animated.div key={key} style={props} className="expense-form-wraper">
                        <ExpenseForm process={ process } setProcess={ setProcess } toggelForm={toggelForm} />
                    </animated.div>
                    )
                }
                <div className={process ? "processing" : "not-processing"}>
                    <h2>Processing..</h2>
                </div>
            </div>
    )
}
