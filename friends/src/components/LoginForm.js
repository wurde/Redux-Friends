'use strict'

/**
 * Dependencies
 */

const React = require('react')
const styles = require('./styles/index')

/**
 * Constants
 */

const Component = React.Component
const LoginFormStyle = styles.LoginFormStyle

/**
 * Define component
 */

class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
  }

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <LoginFormStyle>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" name="username" value={this.state.username} onChange={this.handleOnChange} placeholder="Username"></input>
          <input type="password" name="password" value={this.state.password} onChange={this.handleOnChange} placeholder="Password"></input>
          <button type="submit">Login</button>
        </form>
      </LoginFormStyle>
    )
  }
}

/**
 * Export component
 */

module.exports = LoginForm
