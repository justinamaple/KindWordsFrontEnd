import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Desk from './containers/Desk'
import LoginScreen from './containers/LoginScreen'
import './App.css'

class App extends Component {
  state = {
    accountId: '',
    icon: ''
  }

  setAccountId = accountId => {
    this.setState({ accountId })
  }

  signOut = () => {
    this.setState({ accountId: '' })
  }

  render() {
    return (
      <Router>
        <Route
          exact
          path='/'
          render={props => <Desk {...props} accountId={this.state.accountId} />}
        />
        <Route
          exact
          path='/login'
          render={() => <LoginScreen setAccountId={this.setAccountId} />}
        />
      </Router>
    )
  }
}

export default App
