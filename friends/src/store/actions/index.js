'use strict'

/**
 * Dependencies
 */

const axios = require('axios')
const helpers = require('./helpers/index')

/**
 * Constants
 */

const LOGIN_START = 'LOGIN_START'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_ERROR = 'LOGIN_ERROR'
const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START'
const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS'
const FETCH_FRIENDS_ERROR = 'FETCH_FRIENDS_ERROR'
const axiosWithAuth = helpers.axiosWithAuth

/**
 * Define actions
 */

const login = creds => dispatch => {
  dispatch({ type: LOGIN_START })

  return axios
    .post('http://localhost:5000/api/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      dispatch({ type: LOGIN_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: LOGIN_ERROR, payload: err.response.message })
    })
}

const getFriends = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS_START })

  axiosWithAuth().get('http://localhost:5000/api/friends')
    .then(res => dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FRIENDS_ERROR, payload: err }))
}

/**
 * Export actions
 */

module.exports = {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  login: login,
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_ERROR,
  getFriends: getFriends,
}
