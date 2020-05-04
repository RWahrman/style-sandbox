import React from 'react'
// import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Sandbox = props => {
  let styles = {
    fontFamily: props.font,
    fontSize: 14,
    color: props.color
  }

  return (
    <div id="sandbox">
      <h3>Sandbox</h3>
      <textarea
        style={styles}
        id="sandbox-input"
        defaultValue="Input content here."
      />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    font: state.font.name,
    color: state.font.color
  }
}

export default connect(mapState)(Sandbox)
