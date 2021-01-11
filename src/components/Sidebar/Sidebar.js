import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsHouse, BsWrench, BsPeople, BsBarChart, BsEnvelope, BsPersonPlus,BsGraphUp, BsCardChecklist } from 'react-icons/bs'
import { FaChartBar, FaUser } from 'react-icons/fa'
import { useTransition, animated } from 'react-spring'
import './Sidebar.css'

export default function Sidebar() {
    const [showSubNav, setNav] = useState(false)
    const hideInnerNav = () => setNav(false)
    // const transitions = useTransition(showSubNav, null,{
    //     from:{transform:'translateY(-10%)'},
    //     enter:{transform:'translate(0)'},
    //     leave:{transform:'translateY(-10%)'}
    // })
    return (
        <aside className="">
           <div className="sidebar-heager">
               <h2>SmartAdmin</h2>
           </div>
           <div className="sidebar-body">
               <ul>
                    <li className="nav"><Link className="nav-link" to="/"><BsHouse className="sidebar-icon" /> Dashboard</Link></li>
                    <li className="nav"><Link className="nav-link" to="/stuffs"><BsPeople className="sidebar-icon"/> Stuffs</Link></li>
                    <li className="nav" onClick={()=> setNav(!showSubNav)}><Link className="nav-link" ><BsPeople className="sidebar-icon"/> Students</Link></li>
                    <div className={ showSubNav ? "inner-nav" : "hideNav"}>
                        <ul onClick={ hideInnerNav }>
                            <li className="nav"><Link className="nav-link" to="/students/Primary-one"> Primary one</Link></li>
                            <li className="nav"><Link className="nav-link" to="/students/Primary-two">Primary two</Link></li>
                            <li className="nav"><Link className="nav-link" to="/students/Primary-three"> Primary three</Link></li>
                            <li className="nav"><Link className="nav-link" to="/students/Primary-four">Primary four</Link></li>
                            <li className="nav"><Link className="nav-link" to="/students/Primary-five"> Primary five</Link></li>
                            <li className="nav"><Link className="nav-link" to="/students/Primary-six">Primary six</Link></li>
                            <li className="nav"><Link className="nav-link" to="/students/Primary-seven"> Primary seven</Link></li>
                            <li className="nav"><Link className="nav-link" to="/students/Primary-eight">Primary eight</Link></li>
                       </ul>
                    </div>
                   <li className="nav"><Link className="nav-link" to="/registerForm"><BsPersonPlus className="sidebar-icon"/> Register</Link></li>
                   <li className="nav"><Link className="nav-link" to="/accountant"><BsGraphUp className="sidebar-icon"/> Accountant</Link></li>
                   <li className="nav"><Link className="nav-link" to="/"><BsBarChart className="sidebar-icon"/> Assets</Link></li>
                   <li className="nav"><Link className="nav-link" to="/"><BsEnvelope className="sidebar-icon"/> Messages</Link></li>
                   <li className="nav"><Link className="nav-link" to="/"><BsCardChecklist className="sidebar-icon"/> Attendance</Link></li>
                   <li className="nav"><Link className="nav-link" to="/">Notification</Link></li>
                   <li className="nav"><Link className="nav-link" to="/">Messages</Link></li>
                   <li className="nav"><Link className="nav-link" to="/"><BsWrench /> Setting</Link></li>
               </ul>
           </div>
        </aside>
    )
}
