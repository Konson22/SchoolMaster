import React from 'react'
import { Link } from 'react-router-dom'
import { BsHouse, BsWrench, BsPeople, BsBarChart, BsEnvelope, BsPersonPlus,BsGraphUp, BsCardChecklist } from 'react-icons/bs'
import { FaChartBar, FaUser } from 'react-icons/fa'
import './Sidebar.css'

export default function Sidebar() {
    return (
        <aside className="">
           <div className="sidebar-heager">
               <h2>SmartAdmin</h2>
           </div>
           <div className="sidebar-body">
               <ul>
                   <li className="nav"><Link className="nav-link" to="/"><BsHouse className="sidebar-icon" /> Dashboard</Link></li>
                   <li className="nav"><Link className="nav-link" to="/stuffs"><BsPeople className="sidebar-icon"/> Stuffs</Link></li>
                   <li className="nav"><Link className="nav-link" to="/students"><BsPeople className="sidebar-icon"/> Students</Link></li>
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
