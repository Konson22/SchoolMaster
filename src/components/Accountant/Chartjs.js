import React, { useState } from 'react'
import { Bar, Line,Pie } from 'react-chartjs-2'


export default function Chartjs() {
    const [data, serData] = useState({
            labels:['Badget','Income', 'Expenses', 'profit'],
            datasets:[{
                label:'paid',
                data: [30000,50000,30000, 10000],
                borderColor:'#000',
                borderColor:'rgb(36, 83, 238)',
                backgroundColor:[
                    '#1BB102',
                    '#ECCE06',
                    '#F10945'
                ],
                borderWidth:2,
                lineTension:0.5
            }]
        })

    return (
        <div>
            <Pie 
                data={data}
            />
        </div>
    )
}
