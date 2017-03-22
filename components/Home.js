import React from 'react'

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
  return (
    <div className="app">
      <div className="header">
        <h1>Compare Players</h1>
        <form>
          <label>Player Name: </label>
          <input type="text" name="playerName" placeholder="name" value={ state.form.name ? state.form.name : ""} onChange={handleNameChange}></input>
          <input className="submit" type="submit" value="ADD PLAYER" onClick={addPlayer} ></input>
        </form>
      </div>
      <div className="players">
        {state.isLoading ? <MDSpinner size={80} className="spinner" /> : <Players state={state} dispatch={dispatch}/>}
      </div>
    </div>
  )
}
