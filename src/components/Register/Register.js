import React, {  useState, Component } from 'react';


import './RegisterForm.css'
import FormFilds from './FormFilds'

const Register = () => {
    const [processing, setProcessing] = useState(false)
    return (
        <>
            <FormFilds processing={processing} setProcessing={setProcessing }/>
            <div className={processing ? "processing" : "not-processing" }>
                loading..
            </div>
        </>
    )
}


export default Register;

