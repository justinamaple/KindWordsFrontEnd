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
    const { email, password } = this.state
    const baseUrl = 'http://localhost:3000'
    const signinUrl = baseUrl + '/signin'

    fetch(signinUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(resp => resp.json())
      .then(json => console.log(json))
  }

  renderLoginForm = () => {
    return (
      <>
        <label>Email: </label>
        <input type='text' name='email' onChange={this.handleChange} />

        <label>Password: </label>
        <input type='password' name='password' onChange={this.handleChange} />

        <button id='create' onClick={this.createAccount}>
          Create Account
        </button>
        <button id='login' onClick={this.loginAccount}>
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
