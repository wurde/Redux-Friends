'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_router_dom = require('react-router-dom')
const views = require('../views/index')
// const helpers = require('./helpers/index')

/**
 * Constants
 */

const Route = react_router_dom.Route
const Redirect = react_router_dom.Redirect
const LandingView = views.LandingView
const HomeView = views.HomeView
// const PrivateRoute = helpers.PrivateRoute

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
  // <PrivateRoute path="/home" component={HomeView} />
}

/**
 * Export router component
 */

module.exports = RootRouter
