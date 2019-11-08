import React, { Component } from 'react'
import _ from 'lodash'
import Login from '../components/Login'
import CreateAccount from '../components/CreateAccount'

class LoginScreen extends Component {
  // Make sure this state matches the form we want
  // for both CreateAccount and Login
  state = {
    email: '',
    password: ''
  }
  handleChange = e => {
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state)
  }

  render () {
    return (
      <div>
        <h3>This is a LoginScreen lol</h3>
        <form onSubmit={ this.handleSubmit }>
          <label>Email: </label>
          <input type="text" name="email" onChange={ this.handleChange } />
          <label>Password: </label>
          <input type="text" name="password" onChange={ this.handleChange } />
          <input type='submit' />
        </form>
        <Login />
        <CreateAccount />
      </div>
    )
  }
}

export default LoginScreen
