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
const LandingView = views.LandingView

/**
 * Define router component
 */

function RootRouter() {
  return (
    <>
      <Route exact path="/" component={LandingView} />
      <Route path="/login" render={() => <Redirect to="/users/login" />} />
      <Route path="/signin" render={() => <Redirect to="/users/login" />} />
    </>
  )
}

/**
 * Export router component
 */

module.exports = RootRouter
