import React, { Component } from 'react'

class NavBar extends Component {
  render () {
    return (
      <nav>
        <button id='write' onClick={this.props.handleWrite}>Write Entry</button>
        <button id='read' onClick={this.props.handleRead}>Read Journal</button>
      </nav>
    )
  }
}

export default NavBar
