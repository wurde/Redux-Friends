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

/**
 * Export actions
 */

module.exports = {
  login: login
}
