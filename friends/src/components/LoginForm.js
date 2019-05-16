'use strict'

/**
 * Dependencies
 */

const React = require('react')
const styles = require('./styles/index')
const react_redux = require('react-redux')
const actions = require('../store/actions/index')

/**
 * Constants
 */

const Component = React.Component
const LoginFormStyle = styles.LoginFormStyle
const connect = react_redux.connect
const login = actions.login

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
    this.props.login(this.state)
      .then(() => {
        const redirect_route = this.props.location.state.from || '/home'
        this.props.history.push(redirect_route)
      })
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
 * Define mapStateToProps
 */

const mapStateToProps = (state) => {
  return state
}

/**
 * Export component
 */

module.exports = connect(mapStateToProps, { login })(LoginForm)
