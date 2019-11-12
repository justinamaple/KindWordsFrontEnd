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

  setAccountInfo = state => {
    this.setState(state)
  }

  handleSignOut = () => {
    this.setState({ accountId: '' })
    window.history.pushState('/login')
  }

  render() {
    const { accountId, icon } = this.state
    const { setAccountInfo, handleSignOut } = this
    return (
      <Router>
        <Route
          exact
          path='/'
          render={props => (
            <Desk
              {...props}
              accountId={accountId}
              icon={icon}
              handleSignOut={handleSignOut}
            />
          )}
        />
        <Route
          exact
          path='/login'
          render={props => (
            <LoginScreen {...props} setAccountInfo={setAccountInfo} />
          )}
        />
      </Router>
    )
  }
}

export default App
