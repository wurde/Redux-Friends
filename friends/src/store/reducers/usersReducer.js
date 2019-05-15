'use strict'

/**
 * Dependencies
 */

const actions = require('../actions/index')

/**
 * Constants
 */

const initialState = {
  isFetching: false,
  err: ''
}

/**
 * Define reducer
 */

function usersReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

/**
 * Export reducer
 */

module.exports = usersReducer
