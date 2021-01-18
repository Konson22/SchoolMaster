import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link, component} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Main from './components/Parents/Main'


export default function Parent() {
    return (

            <Switch>
              <Route exact path="/"><Main /></Route>
            </Switch>
    )
}

