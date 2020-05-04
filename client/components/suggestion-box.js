import React from 'react'
// import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const SuggestionBox = props => {
  return (
    <div id="suggestion-box">
      <h3>Style Suggestions</h3>
      <h6>Your current font: {props.font}</h6>
      <h6>Your current color: {props.color}</h6>
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

export default connect(mapState)(SuggestionBox)
