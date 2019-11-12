import React, { Component } from 'react'
import Button from '../components/Button'

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

  createAccount = () => {
    this.fetchAccount('http://localhost:3000/create')
  }

  loginAccount = () => {
    this.fetchAccount('http://localhost:3000/login')
  }

  fetchAccount = url => {
    const { email, password } = this.state
    const { setAccountInfo } = this.props

    fetch(url, {
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
      .then(accountInfo => {
        // Need to add error handling if create/login fails
        setAccountInfo(accountInfo)
        this.props.history.push('/')
      })
  }

  render() {
    return (
      <>
        <label>Email: </label>
        <input type='text' name='email' onChange={this.handleChange} />

        <label>Password: </label>
        <input type='password' name='password' onChange={this.handleChange} />
        <br />
        <Button id='create' onClick={this.createAccount} className='ui button'>
          Create Account
        </Button>
        <Button id='login' onClick={this.loginAccount} className='ui button'>
          Login
        </Button>
      </>
    )
  }
}

export default LoginScreen
