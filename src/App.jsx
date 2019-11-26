import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom"

import PageEmployee from './PageEmployee'
import PageEmployeesList from './PageEmployeesList'


const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <PageEmployeesList/>
      </Route>
      <Route path="/new">
        <PageEmployee />
      </Route>
    </Switch>
  </Router>
)

export default App