import React from 'react'
import './Loader.css'

export default function Loader() {
    return (
        <div className="loader-wraper">
            <img className="loaderImg" src={process.env.PUBLIC_URL + '/images/images11.jpg'} />
        </div>
    )
}
