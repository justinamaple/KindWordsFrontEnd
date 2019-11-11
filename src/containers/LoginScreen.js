import React, { Component } from 'react'

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

  createAccount = e => {
    console.log(this.state)
  }

  loginAccount = e => {
    console.log(this.state)
  }

  // Refactor into
  renderLoginForm = () => {
    return (
      <>
        <label>Email: </label>
        <input type="text" name="email" onChange={this.handleChange} />

        <label>Password: </label>
        <input type="password" name="password" onChange={this.handleChange} />

        <button id="create" onClick={this.createAccount}>
          Create Account
        </button>
        <button id="login" onClick={this.loginAccount}>
          Login
        </button>
      </>
    )
  }

  render() {
    return <>{this.renderLoginForm()}</>
  }
}

export default LoginScreen
