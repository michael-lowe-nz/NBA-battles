import React from 'react'

import Logo from '../svg/logo'
import Search from './Search'


module.exports = ({state, dispatch}) => {
  return (
    <div className="header">
      <Search state={state} dispatch={dispatch}/>
    </div>
  )
}
