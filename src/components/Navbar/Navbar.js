import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'

function Navbar() {
    return (
        <>
            <div className="navbar-wraper">
                <div className="navbar-links-wraper">
                    
                </div>
                <div className="menu-wraper">
                    <Button>Log out</Button>
                </div>
            </div>
        </>
    )
}

export default Navbar
