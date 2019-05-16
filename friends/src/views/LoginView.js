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
      <div class="container">
        <div class="row">
          <div class="col-12">
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
