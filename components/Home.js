import React from 'react'
import NBA from 'nba'

import Player from './Player'
import Players from './Players'
import Search from './Search'
import Logo from '../svg/logo'
import Suggestions from './Suggestions'

import getPlayer from '../api/getPlayer'

import MDSpinner from "react-md-spinner"
import Autosuggest from 'react-autosuggest'


module.exports = ({state, dispatch}) => {
  return (
    <div className="app">
      <div className="header">
        <Logo />
      </div>
      <Search state={state} dispatch={dispatch}/>
      <Suggestions state={state} dispatch={dispatch}/>
      {state.isLoading ?
        <MDSpinner size={80} className="spinner" />
        :
        <Players state={state} dispatch={dispatch}/>}
    </div>
  )
}
