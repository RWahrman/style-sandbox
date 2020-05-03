import React from 'react'
// import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Sandbox = props => {
  return (
    <div id="sandbox">
      <h3>Sandbox</h3>
      <textarea id="sandbox-input" defaultValue="Input content here." />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(Sandbox)

/**
 * PROP TYPES
 */
// UserHome.propTypes = {
//   email: PropTypes.string,
// }
