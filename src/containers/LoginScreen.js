import React, { Component } from 'react'
import Button from '../components/Button'

class LoginScreen extends Component {
  // Make sure this state matches the form we want
  // for both CreateAccount and Login
  state = {
    email: '',
    password: '',
    errors: null
  }

  handleChange = e => {
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }

  setErrors = errors => {
    this.setState({ errors: errors, password: '' })
  }

  createAccount = () => {
    const { setAccountInfo } = this.props

    this.fetchAccount('http://localhost:3000/create').then(json => {
      if (json.errors) {
        this.setErrors(json.errors)
      } else {
        setAccountInfo(json)
        this.props.history.push('/')
      }
    })
  }

  loginAccount = () => {
    const { setAccountInfo } = this.props

    this.fetchAccount('http://localhost:3000/login').then(json => {
      if (json.errors) {
        this.setErrors(json.errors)
      } else {
        setAccountInfo(json)
        this.props.history.push('/')
      }
    })
  }

  fetchAccount = url => {
    const { email, password } = this.state

    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    }).then(resp => resp.json())
  }

  closeErrors = () => {
    this.setState({ errors: null })
  }

  renderErrors = () => {
    if (this.state.errors) {
      return (
        <div className='ui error message'>
          <i className='close icon' onClick={this.closeErrors}></i>
          <div className='header'>
            There were some errors with your submission
          </div>
          <ul className='list'>{this.renderErrorList()}</ul>
        </div>
      )
    }
  }

  renderErrorList = () => {
    const { errors } = this.state

    return Object.keys(errors).map((key, index) => (
      <li key={index}>{`${key} ${errors[key]}`}</li>
    ))
  }

  renderEmailInput = () => {
    return (
      <div className='row'>
        <label>Email: </label>
        <input
          className='right floated'
          type='text'
          name='email'
          onChange={this.handleChange}
          value={this.state.email}
        />
      </div>
    )
  }

  renderPasswordInput = () => {
    return (
      <div className='row'>
        <label>Password: </label>
        <input
          className='right floated'
          type='password'
          name='password'
          onChange={this.handleChange}
          value={this.state.password}
        />
      </div>
    )
  }

  renderLoginAndCreateButtons = () => {
    return (
      <div className='ui two'>
        <div className='left floated'>
          <Button
            id='create'
            onClick={this.createAccount}
            className='ui button'
          >
            Create
          </Button>
        </div>
        <div className='right floated'>
          <Button id='login' onClick={this.loginAccount} className='ui button'>
            Login
          </Button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <>
        {this.renderErrors()}
        <div className='ui cards centered'>
          <div className='card'>
            <div className='content centered'>
              <h3 className='centered'> Login </h3>
              {this.renderEmailInput()}
              <br />
              {this.renderPasswordInput()}
            </div>
            <div className='extra content'>
              {this.renderLoginAndCreateButtons()}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default LoginScreen
