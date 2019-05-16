'use strict'

/**
 * Dependencies
 */

const actions = require('../actions/index')

/**
 * Constants
 */

const initialState = {
  isDeletingFriend: false,
  isFetchingFriends: false,
  friends: [],
  isLoggingIn: false,
  isSavingFriends: false,
  isUpdatingFriend: false,
  error: null
}

/**
 * Define reducer
 */

function usersReducer(state = initialState, action) {
  console.log("usersReducer", action, state)

  switch (action.type) {
    case actions.LOGIN_START:
      return Object.assign({}, state, {
        isLoggingIn: true,
        error: ''
      })
    case actions.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoggingIn: false,
        error: ''
      })
    case actions.LOGIN_ERROR:
      return Object.assign({}, state, {
        isLoggingIn: false,
        error: action.payload
      })
    case actions.FETCH_FRIENDS_START:
      return Object.assign({}, state, {
        isFetchingFriends: true,
        error: ''
      })
    case actions.FETCH_FRIENDS_SUCCESS:
      return Object.assign({}, state, {
        isFetchingFriends: false,
        error: '',
        friends: action.payload
      })
    case actions.FETCH_FRIENDS_ERROR:
      return Object.assign({}, state, {
        isFetchingFriends: false,
        error: action.payload
      })
    default:
      return state
  }
}


/**
 * Export reducer
 */

module.exports = usersReducer
