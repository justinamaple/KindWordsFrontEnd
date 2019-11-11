import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Desk from './containers/Desk'
import LoginScreen from './containers/LoginScreen'
import './App.css'

class App extends Component {
  state = {
    accountId: 2
  }

  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          render={props => <Desk {...props} accountId={this.state.accountId} />}
        />
        <Route exact path="/login" component={LoginScreen} />
      </Router>
    )
  }
}

export default App
