'use strict'

/**
 * Dependencies
 */

const axios = require('axios')

/**
 * Define helper
 */

const axiosWithAuth = () => {
  const token = localStorage.getItem("token")

  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  })
}

/**
 * Export helper
 */

module.exports = axiosWithAuth
