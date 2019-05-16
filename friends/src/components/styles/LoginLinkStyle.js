'use strict'

/**
 * Dependencies
 */

const styled_components = require('styled-components')

/**
 * Constants
 */

const styled = styled_components.default

/**
 * Define style component
 */

const LoginLinkStyle = styled.div(() => `
  text-align: center;
  margin-top: 40px;

  a {
    display: block;
    text-decoration: none;
    color: #333;
    font-size: 1.2rem;
    width: 100%;
    padding: 10px 20px;
    background-color: #DDD;
    cursor: pointer;
    border-radius: 5px;
  }

  a:hover {
    background-color: #EEE;
  }

  a:active {
    background-color: #CCC;
  }
`)

/**
 * Export style component
 */

module.exports = LoginLinkStyle
