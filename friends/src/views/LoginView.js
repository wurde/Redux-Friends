'use strict'

/**
 * Dependencies
 */

const React = require('react')
const components = require('../components/index')

/**
 * Constants
 */

const LoginForm = components.LoginForm

/**
 * Define view component
 */

function LoginView() {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  )
}

/**
 * Export view component
 */

module.exports = LoginView
