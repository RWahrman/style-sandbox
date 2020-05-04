// import axios from 'axios'
// import history from '../../history'

//ACTION TYPE(S)
const CHANGE_FONT = 'CHANGE_FONT'
const CHANGE_COLOR = 'CHANGE_COLOR'

// INITIAL STATE
const defaultFont = {name: 'Helvetica', color: 'black'}

//ACTION CREATOR(S)
export const changeFont = font => ({type: CHANGE_FONT, font})

export const changeColor = color => ({type: CHANGE_COLOR, color})

//REDUCER
export default function(state = defaultFont, action) {
  switch (action.type) {
    case CHANGE_FONT:
      return {...state, name: action.font}
    case CHANGE_COLOR:
      return {...state, color: action.color}
    default:
      return state
  }
}

// THUNK CREATOR(S)
// export const thunkChangeFont = () => async (dispatch) => {
//   try {
//     const res = await axios.get('/auth/me')
//     dispatch(getUser(res.data || defaultUser))
//   } catch (err) {
//     console.error(err)
//   }
// }
