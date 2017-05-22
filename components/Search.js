import React from 'react'
import NBA from 'nba'
import Autocomplete from 'react-autocomplete'

import {getPlayers} from '../lib/utils'

import getPlayer from '../api/getPlayer'


module.exports = ({state, dispatch}) => {
  function handleNameChange (e) {
    e.preventDefault()
    dispatch({type: 'HANDLE_FORM_NAME_CHANGE', payload: e.target.value})
    const suggestions = NBA.searchPlayers(e.target.value)
    dispatch({type: 'ADD_SUGGESTIONS', payload: suggestions})
  }
  function addPlayer (playerName) {
    getPlayer(playerName.toLowerCase(), dispatch)
    dispatch({type: 'HANDLE_FORM_NAME_CHANGE', payload: ""})
    dispatch({type: 'CLEAR_SUGGESTIONS'})
  }
  function clearPlayers (e) {
    e.preventDefault()
    dispatch({type: 'CLEAR_PLAYERS'})
    dispatch({type: 'CLEAR_SUGGESTIONS'})
    dispatch({type: 'HANDLE_FORM_NAME_CHANGE', payload: ""})
  }
  return (
    <div className="search">
      <form>
        <Autocomplete
          items={state.form.suggestions}
          value={state.form.name}
          onChange={handleNameChange}
          onSelect={
            addPlayer
          }
          getItemValue={(item)=>item.fullName}
          renderItem={(suggestion)=><div className="clickable suggestion">{suggestion.fullName}</div>}
          />
        <input className="formElement button addPlayer clickable" type="submit" value="Add Player" onClick={addPlayer} ></input>
        <input className="formElement button clearPlayers clickable" type="submit" value="Clear" onClick={clearPlayers} ></input>
      </form>
    </div>
  )
}
