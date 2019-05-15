'use strict'

/**
 * Dependencies
 */

const redux = require('redux')
const usersReducer = require('./usersReducer')

/**
 * Constants
 */

const combineReducers = redux.combineReducers

/**
 * Combine reducers
 */

const reducers = combineReducers({
  usersReducer
})


/**
 * Export reducers
 */

module.exports = reducers
