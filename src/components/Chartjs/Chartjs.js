import React, { useState } from 'react'
import { Bar, Line } from 'react-chartjs-2'


export default function Chartjs() {
    const [data, serData] = useState({
            labels:['primary one','primary two', 'primary three', 'primary four', 'primary five','primary six','primary seven', 'primary eight'],
            datasets:[{
                label:'paid',
                data: [560,554,555,548,566,544,554,556],
                borderColor:'#000',
                borderColor:'rgba(250,209,15)',
                borderWidth:1,
                lineTension:0.1
            }]
        })

    return (
        <div>
            <Line 
                data={data}
            />
        </div>
    )
}
