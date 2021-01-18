import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link, component} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import LandingPage from './components/LandingPage/LandingPage'
import Main from './components/Main/Main'
import Students from './components/Students/Students'
import Profile from './components/Students/Profile'
import Stuffs from './components/Stuffs/Stuffs'
import RegisterForm from './components/RegisterForm/RegisterForm'
import Accountant from './components/Accountant/Accountant'
import FeesCollection from './components/Accountant/FeesCollection/FeesCollection'
import SingleClassFees from './components/Accountant/FeesCollection/SingleClassFees'
import Payroll from './components/Accountant/Payroll/Payroll'
import Expense from './components/Accountant/Expense/Expense'
import ScrollToTop from './components/ScrollToTop'
import {DataProvider} from './components/GlobalContext/GlobalContext'

export default function Admin() {
    return (
        <div className="App">
        <aside>
          <Sidebar />
        </aside>
        <section>
          <nav>
            <Navbar />
            <ScrollToTop />
          </nav>
        <DataProvider>
          <main>
            <Switch>
              <Route exact path="/"><Main /></Route>
              <Route exact path="/SchoolMaster"><Main /></Route>
              <Route  path="/students/:cName"><Students /></Route>
              <Route  path="/profile/:id"><Profile /></Route>
              <Route  path="/stuffs"><Stuffs /></Route>
              <Route  path="/accountant" component={Accountant}>
              </Route>
              <Route  path="/single-class-record/:cName"><SingleClassFees /></Route>
              <Route  path="/registerForm"><RegisterForm /></Route>
              <Route  path="/fees-rocord"><FeesCollection /></Route>
              <Route  path="/payroll"><Payroll /></Route>
              <Route  path="/expenses"><Expense /> </Route>
            </Switch>
    

          </main>
      </DataProvider>

        </section>
      </div>
    )
}
