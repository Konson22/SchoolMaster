import React, { useState, useContext } from 'react'
import { Bar, Line } from 'react-chartjs-2'
import {GlobalContext} from '../GlobalContext/GlobalContext'


export default function Chartjs() {
    const classData = useContext(GlobalContext)

    
    if(classData.students.status){
        
    }
    // console.log(filteredData)

    const [data, serData] = useState({
            labels:['primary one','primary two', 'primary three', 'primary four', 'primary five','primary six','primary seven', 'primary eight', 'all classes'],
            datasets:[{
                label:'paid',
                data: [
                    classData.students.data.map(paid => paid.fees.paid).reduce((amount, total)=> +amount + +total, 0),
                    classData.students.data.filter(clas => clas.class == "Primary one").map(paid => paid.fees.paid).reduce((amount, total)=> +amount + +total, 0),
                    classData.students.data.filter(clas => clas.class == "Primary two").map(paid => paid.fees.paid).reduce((amount, total)=> +amount + +total, 0),
                    classData.students.data.filter(clas => clas.class == "Primary three").map(paid => paid.fees.paid).reduce((amount, total)=> +amount + +total, 0),
                    classData.students.data.filter(clas => clas.class == "Primary four").map(paid => paid.fees.paid).reduce((amount, total)=> +amount + +total, 0),
                    classData.students.data.filter(clas => clas.class == "Primary five").map(paid => paid.fees.paid).reduce((amount, total)=> +amount + +total, 0),
                    classData.students.data.filter(clas => clas.class == "Primary six").map(paid => paid.fees.paid).reduce((amount, total)=> +amount + +total, 0),
                    classData.students.data.filter(clas => clas.class == "Primary seven").map(paid => paid.fees.paid).reduce((amount, total)=> +amount + +total, 0),
                    classData.students.data.filter(clas => clas.class == "Primary eight").map(paid => paid.fees.paid).reduce((amount, total)=> +amount + +total, 0)
                ],
                backgroundColor:[
                    'rgba(50,209,105)',
                    'rgba(250,29,89)',
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
        })

    return (
        <div>
            <Bar
                data={data}
            />
        </div>
    )
}
