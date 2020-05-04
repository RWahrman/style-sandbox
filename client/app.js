import React from 'react'

import {Sandbox, StyleSelector, SuggestionBox} from './components'
// import Routes from './routes'

const App = () => {
  return (
    <div id="sandboxes-container">
      <Sandbox />
      <StyleSelector />
      <SuggestionBox />
    </div>
  )
}

export default App
