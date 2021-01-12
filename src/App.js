

import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
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

function App() {

  return (
    <Router>
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
              
              <Route exact path="/students/:cName"><Students /></Route>
              <Route exact path="/students/profile/:id"><Profile /></Route>
              <Route exact path="/stuffs"><Stuffs /></Route>
              <Route exact path="/accountant"><Accountant /></Route>
              <Route exact path="/registerForm"><RegisterForm /></Route>
              <Route exact path="/accountant/fees"><FeesCollection /></Route>
              <Route exact path="/accountant/payroll"><Payroll /></Route>
              <Route exact path="/accountant/single-class-record/:cName"><SingleClassFees /></Route>
              <Route exact path="/accountant/expenses"><Expense /> </Route>
            </Switch>
    

          </main>
      </DataProvider>

        </section>
      </div>
    </Router>

  );
}

export default App;
