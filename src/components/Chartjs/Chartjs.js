import React, { useState, useContext } from 'react'
import { Bar, Line } from 'react-chartjs-2'
import {GlobalContext} from '../GlobalContext/GlobalContext'


export default function Chartjs() {
    const classData = useContext(GlobalContext)

    let data
    if(classData.students.status){
        data = {
        labels:['primary one','primary two', 'primary three', 'primary four', 'primary five','primary six','primary seven', 'primary eight', 'all classes'],
        datasets:[{
            label:'paid',
            data: [
                classData.students.data.filter(cName => cName.class == "Primary one").map(c => c.fees.paid).reduce((a, t) => +a + +t, 0),
                classData.students.data.filter(cName => cName.class == "Primary two").map(c => c.fees.paid).reduce((a, t) => +a + +t, 0),
                classData.students.data.filter(cName => cName.class == "Primary three").map(c => c.fees.paid).reduce((a, t) => +a + +t, 0),
                classData.students.data.filter(cName => cName.class == "Primary four").map(c => c.fees.paid).reduce((a, t) => +a + +t, 0),
                classData.students.data.filter(cName => cName.class == "Primary five").map(c => c.fees.paid).reduce((a, t) => +a + +t, 0),
                classData.students.data.filter(cName => cName.class == "Primary six").map(c => c.fees.paid).reduce((a, t) => +a + +t, 0),
                classData.students.data.filter(cName => cName.class == "Primary seven").map(c => c.fees.paid).reduce((a, t) => +a + +t, 0),
                classData.students.data.filter(cName => cName.class == "Primary eight").map(c => c.fees.paid).reduce((a, t) => +a + +t, 0)
            ],
            backgroundColor:[
                'rgba(50,209,105, .5)',
                'rgba(250,29,89, .5)',
                'rgba(10,69,5)',
                'rgba(25,249,32)',
                'rgba(250,29,9)',
                'rgba(260,79,95)',
                'rgba(105,44,28)',
                'rgba(210,9,9)',
                'rgba(260,179,95)'
            ],
            borderColor:'rgba(250,209,105)',
            borderWidth:0.1,
            lineTension:0.1
        }]
    }
    }


    return (
        <div>
            <Bar data={data}/>
        </div>
    )
}
