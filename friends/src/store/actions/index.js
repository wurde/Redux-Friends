'use strict'

/**
 * Dependencies
 */

const axios = require('axios')

/**
 * Constants
 */

const LOGIN_START = 'LOGIN_START'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_ERROR = 'LOGIN_ERROR'
const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START'
const FETCH_FRIENDS_SUCCESSFUL = 'FETCH_FRIENDS_SUCCESSFUL'
const FETCH_FRIENDS_ERROR = 'FETCH_FRIENDS_ERROR'

/**
 * Define actions
 */

const login = creds => dispatch => {
  dispatch({ type: LOGIN_START })

  return axios
    .post('/api/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      dispatch({ type: LOGIN_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: LOGIN_ERROR, payload: err.response.message })
    })
}

const getCharacters = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS_START })

  axios.get('/api/friends')
    .then(res => dispatch({ type: FETCH_FRIENDS_SUCCESSFUL, payload: res.data.results }))
    .catch(err => dispatch({ type: FETCH_FRIENDS_ERROR, payload: err }))
}

/**
 * Export actions
 */

module.exports = {
  LOGIN_START: LOGIN_START,
  LOGIN_SUCCESS: LOGIN_SUCCESS,
  LOGIN_ERROR: LOGIN_ERROR,
  login: login,
  FETCH_FRIENDS_START: FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESSFUL: FETCH_FRIENDS_SUCCESSFUL,
  FETCH_FRIENDS_ERROR: FETCH_FRIENDS_ERROR,
  getFriends: getFriends,
}
