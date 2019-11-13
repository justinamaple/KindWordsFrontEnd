import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Desk from './containers/Desk'
import LoginScreen from './containers/LoginScreen'
import './styles/App.scss'

class App extends Component {
  state = {
    accountId: '',
    icon: ''
  }

  setAccountInfo = state => {
    this.setState(state)
    localStorage.setItem('account', JSON.stringify(state))
    this.renderRedirect()
  }

  handleSignOut = () => {
    localStorage.clear()
    this.setState({ accountId: '', icon: '' })
    return <Redirect to='/login' />
  }

  renderRedirect = () => {
    if (this.state.accountId === '' && localStorage.getItem('account')) {
      return <Redirect to='/login' />
    } else {
      return <Redirect to='/' />
    }
  }

  componentDidMount() {
    const account = JSON.parse(localStorage.getItem('account'))
    if (account) this.setState(account)
  }

  render() {
    const { accountId, icon } = this.state
    const { setAccountInfo, handleSignOut } = this

    return (
      <Router>
        {this.renderRedirect()}
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
