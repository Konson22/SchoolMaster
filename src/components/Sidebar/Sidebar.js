import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsHouse, BsWrench, BsPeople, BsBarChart, BsEnvelope, BsPersonPlus,BsGraphUp, BsCardChecklist, BsChevronCompactDown } from 'react-icons/bs'
import { FaChartBar, FaUser, FaFileSignature } from 'react-icons/fa'
import { useTransition, animated } from 'react-spring'
import './Sidebar.css'

export default function Sidebar() {
    const [showSubNav, setNav] = useState(false)
    const hideInnerNav = () => setNav(false)
 
    return (
        <aside className="">
           <div className="sidebar-heager">
               <h2>SmartAdmin</h2>
           </div>
           <div className="sidebar-body">
               <ul>
                    <li className="nav"><Link className="nav-link" to="/SchoolMaster/"><BsHouse className="sidebar-icon" /> Dashboard</Link></li>
                    <li className="nav"><Link className="nav-link" to="/SchoolMaster/stuffs"><BsPeople className="sidebar-icon"/> Stuffs</Link></li>
                    <li className="nav" onClick={()=> setNav(!showSubNav)}><Link className="nav-link" ><BsPeople className="sidebar-icon"/> Students <BsChevronCompactDown /></Link></li>
                    <div className={ showSubNav ? "inner-nav" : "hideNav"}>
                        <ul onClick={ hideInnerNav }>
                            <li className="nav"><Link className="nav-link" to="/SchoolMaster/students/Primary-one"> Primary one</Link></li>
                            <li className="nav"><Link className="nav-link" to="/SchoolMaster/students/Primary-two">Primary two</Link></li>
                            <li className="nav"><Link className="nav-link" to="/SchoolMaster/students/Primary-three"> Primary three</Link></li>
                            <li className="nav"><Link className="nav-link" to="/SchoolMaster/students/Primary-four">Primary four</Link></li>
                            <li className="nav"><Link className="nav-link" to="/SchoolMaster/students/Primary-five"> Primary five</Link></li>
                            <li className="nav"><Link className="nav-link" to="/SchoolMaster/students/Primary-six">Primary six</Link></li>
                            <li className="nav"><Link className="nav-link" to="/SchoolMaster/students/Primary-seven"> Primary seven</Link></li>
                            <li className="nav"><Link className="nav-link" to="/SchoolMaster/students/Primary-eight">Primary eight</Link></li>
                       </ul>
                    </div>
                    <li className="nav"><Link className="nav-link" to="/SchoolMaster/registerForm"><BsPersonPlus className="sidebar-icon"/> Register</Link></li>
                    <li className="nav"><Link className="nav-link" to="/SchoolMaster/accountant"><BsGraphUp className="sidebar-icon"/> Accountant</Link></li>
                    <li className="nav"><Link className="nav-link" to="/SchoolMaster/fees-rocord"><FaFileSignature className="sidebar-icon"/> Fees record</Link></li>
                    <li className="nav"><Link className="nav-link" to="/SchoolMaster/expenses"><BsEnvelope className="sidebar-icon"/> Expenses</Link></li>
                    <li className="nav"><Link className="nav-link" to="/SchoolMaster/"><BsEnvelope className="sidebar-icon"/> Payroll</Link></li>
                    <li className="nav"><Link className="nav-link" to="/SchoolMaster/"><BsEnvelope className="sidebar-icon"/> Messages</Link></li>
                    <li className="nav"><Link className="nav-link" to="/SchoolMaster/">Notification</Link></li>
                    <li className="nav"><Link className="nav-link" to="/SchoolMaster/">Messages</Link></li>
                    <li className="nav"><Link className="nav-link" to="/SchoolMaster/"><BsWrench /> Setting</Link></li>
               </ul>
           </div>
        </aside>
    )
}
