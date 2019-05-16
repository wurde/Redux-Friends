'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_redux = require('react-redux')
const actions = require('../store/actions/index')

/**
 * Constants
 */

const Component = React.Component
const connect = react_redux.connect
const getFriends = actions.getFriends

/**
 * Define view component
 */

class HomeView extends Component {
  constructor() {
    super()
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    console.log('componentDidMount', this.props.getFriends)
    this.props.getFriends()
  }

  render() {
    return (
      <main>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Friends</h1>

              <ul>
                {this.props.friends &&
                 this.props.friends.map(friend => (
                   <li key={friend.id}>{friend.name}</li>
                 ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

/**
 * Define mapStateToProps
 */

const mapStateToProps = (state) => {
  return {
    friends: state.usersReducer.friends
  }
}

/**
 * Export view component
 */

module.exports = connect(mapStateToProps, { getFriends })(HomeView)
