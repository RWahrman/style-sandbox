import React from 'react'
// import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import fonts from './fonts'
import colors from './colors'
import {changeFont, changeColor} from '../store/fontReducer'
/**
 * COMPONENT
 */
export const StyleSelector = props => {
  console.log(props.font)
  return (
    <div>
      <h3>Font Selector</h3>
      <div id="style-selector">
        <select id="font-selector" onChange={props.changeFont}>
          {fonts.map(font => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
        <select id="color-selector" onChange={props.changeColor}>
          {colors.map(color => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
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
const mapDispatch = dispatch => {
  return {
    changeFont: () =>
      dispatch(changeFont(document.getElementById('font-selector').value)),
    changeColor: () =>
      dispatch(changeColor(document.getElementById('color-selector').value))
  }
}
export default connect(mapState, mapDispatch)(StyleSelector)

/**
 * PROP TYPES
 */
// UserHome.propTypes = {
//   email: PropTypes.string,
// }
