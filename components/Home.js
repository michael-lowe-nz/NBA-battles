import React from 'react'
import NBA from 'nba'

import Player from './Player'
import Players from './Players'
import getPlayer from '../api/getPlayer'

import MDSpinner from "react-md-spinner"
import Autosuggest from 'react-autosuggest'


module.exports = ({state, dispatch}) => {
  function handleNameChange (e) {
    e.preventDefault()
    dispatch({type: 'HANDLE_FORM_NAME_CHANGE', payload: e.target.value})
  }
  function addPlayer (e) {
    e.preventDefault()
    getPlayer(state, dispatch)
    dispatch({type: 'HANDLE_FORM_NAME_CHANGE', payload: ""})
  }
  function getSuggestions (value) {
    if (value) {
      return NBA.searchPlayers(value)
    }
    return null
  }
  function getSuggestionValue (player) {
    return player.fullName
  }
  function renderSuggestion (player) {
    return(
      <div>
        player.fullName
      </div>
    )
  }
  const onSuggestionsFetchRequested = () => {
    dispatch({type: 'ADD_SUGGESTIONS', payload: getSuggestions(state.form.name)})
  }

  // Autosuggest will call this function every time you need to clear suggestions.
  const onSuggestionsClearRequested = () => {
    dispatch({type: 'ADD_SUGGESTIONS', payload: []})
  }
  const inputProps = {
    placeholder: "Type A Player's Name",
    value: null,
    onChange: handleNameChange
  }
  return (
    <div className="app">
      <div className="header">
        <h1>Compare Players</h1>
        <form>
          <label>Player Name: </label>
          <input type="text" name="playerName" placeholder="name" autoComplete="off" value={ state.form.name ? state.form.name : ""} onChange={handleNameChange}></input>
          <input className="submit" type="submit" value="ADD PLAYER" onClick={addPlayer} ></input>
        </form>
      </div>
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
