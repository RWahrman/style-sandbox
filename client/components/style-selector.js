import React from 'react'
// import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const StyleSelector = props => {
  return (
    <div id="style-selector">
      <h3>Font Selector</h3>
      <form>
        <select>
          <option />
        </select>
      </form>
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

export default connect(mapState)(StyleSelector)

/**
 * PROP TYPES
 */
// UserHome.propTypes = {
//   email: PropTypes.string,
// }
