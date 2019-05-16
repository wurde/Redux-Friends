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

const LoginFormStyle = styled.div(() => `
  text-align: center;
  margin-top: 40px;

  input {
    width: 100%;
    margin-top: 10px;
    padding: 10px 10px;
    border: 1px solid #DDD;
  }

  button {
    margin-top: 10px;
    padding: 10px 0px;
    width: 100%;
    cursor: pointer;
    border: 1px solid #DDD;
    background-color: rgb(67, 88, 247);
    color: #FFF;
    font-size: 1.4rem;
  }

  button:hover {
    background-color: rgb(97, 115, 246);
  }

  button:active {
    background-color: rgb(42, 66, 245);
  }
`)

/**
 * Export style component
 */

module.exports = LoginFormStyle
