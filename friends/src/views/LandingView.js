'use strict'

/**
 * Dependencies
 */

const React = require('react')
const components = require('../components/index')

/**
 * Constants
 */

const LoginLink = components.LoginLink

/**
 * Define view component
 */

function LandingView() {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <LoginLink />
          </div>
        </div>
      </div>
    </main>
  )
}

/**
 * Export view component
 */

module.exports = LandingView
