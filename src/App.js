import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Desk from './containers/Desk'
import LoginScreen from './containers/LoginScreen'
import './App.css'

const App = (props) => {
  return (
    <Router>
      <Route exact path='/' component={Desk} />
      <Route exact path='/login' component={LoginScreen} />
    </Router>
  )
}

export default App
