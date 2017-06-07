import React from 'react'

import Header from './Header'
import Players from './Players'

module.exports = ({state, dispatch}) => {
  return (
    <div className="app">
      <Header state={state} dispatch={dispatch}/>
      <Players state={state} dispatch={dispatch}/>
    </div>
  )
}
