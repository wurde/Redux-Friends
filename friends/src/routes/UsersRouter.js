'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_router_dom = require('react-router-dom')
const views = require('../views/index')

/**
 * Constants
 */

const Route = react_router_dom.Route
const Redirect = react_router_dom.Redirect
const LoginView = views.LoginView

/**
 * Define router component
 */

function UsersRouter({ mount }) {
  return (
    <>
      <Route path={`${mount}/login`} component={LoginView} />
      <Route path={`${mount}/signin`} render={() => <Redirect to={`${mount}/login`} />} />
    </>
  )
}

/**
 * Define router component
 */

module.exports = UsersRouter
