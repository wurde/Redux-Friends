'use strict'

/**
 * Dependencies
 */

const React = require('react')
const styles = require('./styles/index')

/**
 * Constants
 */

const LoginLinkStyle = styles.LoginLinkStyle

/**
 * Define component
 */

const LoginLink = () => {
  return (
    <LoginLinkStyle>
      <a href="/users/login">Login</a>
    </LoginLinkStyle>
  )
}

/**
 * Export component
 */

module.exports = LoginLink
