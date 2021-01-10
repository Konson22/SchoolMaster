import React, { useState } from 'react'
import { Bar, Line } from 'react-chartjs-2'


export default function Chartjs() {
    const [data, serData] = useState({
            labels:['primary one','primary two', 'primary three', 'primary four', 'primary five','primary six','primary seven', 'primary eight', 'all classes'],
            datasets:[{
                label:'paid',
                data: [80,90,77,90,78,86,80,88, 87],
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
                borderWidth:1,
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
