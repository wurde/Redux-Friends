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

const PrivateRoute = ({ component: Component, path }) => {
  return (
    <Route path={path}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />
        } else {
          return <Redirect to="/users/login" />
        }
      }}
    />
  )
}

/**
 * Export route component
 */

module.exports = PrivateRoute
