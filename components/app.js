import React from 'react'

import Header from './Header'
import Players from './Players'
import Search from './Search'
import Logo from '../svg/logo'
import Suggestions from './Suggestions'
import Comparison from './Comparison'

import getPlayer from '../api/getPlayer'

import MDSpinner from "react-md-spinner"


module.exports = ({state, dispatch}) => {
  return (
    <div className="app">
      <Header />
      <Search state={state} dispatch={dispatch}/>
      <Suggestions state={state} dispatch={dispatch}/>
      {state.isLoading ?
        <MDSpinner size={80} className="spinner" />
        :
        <Players state={state} dispatch={dispatch}/>}
      <Comparison />
    </div>
  )
}
