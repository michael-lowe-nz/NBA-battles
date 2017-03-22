import React from 'react'
import NBA from 'nba'

import Player from './Player'
import Players from './Players'
import Search from './Search'

import getPlayer from '../api/getPlayer'

import MDSpinner from "react-md-spinner"
import Autosuggest from 'react-autosuggest'


module.exports = ({state, dispatch}) => {
  return (
    <div className="app">
      <div className="header">
        <h1>Compare Players</h1>
      </div>
      <Search state={state} dispatch={dispatch}/>
      <div className="players">
        {state.isLoading ? <MDSpinner size={80} className="spinner" /> : <Players state={state} dispatch={dispatch}/>}
      </div>
    </div>
  )
}

const suggestedPlayers = [
  {name: "Stephen Curry"},
  {name: "Kyrie Irving"}
]

// <Autosuggest
//   suggestions={state.form.suggestions}
//   getSuggestionValue={getSuggestionValue}
//   renderSuggestion={renderSuggestion}
//   onSuggestionsFetchRequested={onSuggestionsFetchRequested}
//   onSuggestionsClearRequested={onSuggestionsClearRequested}
//   inputProps={inputProps}
// />
