'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_router_dom = require('react-router-dom')

/**
 * Constants
 */

const Component = React.Component
const Route = react_router_dom.Route
const Redirect = react_router_dom.Redirect

/**
 * Define route component
 */

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/users/login" />
      )
    }
  />
)

/**
 * Export route component
 */

module.exports = PrivateRoute
