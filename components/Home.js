import React from 'react'

import Player from './Player'
import getPlayer from '../api/getPlayer'

module.exports = ({state, dispatch}) => {
  function handleNameChange (e) {
    e.preventDefault()
    console.log('e.target.value', e.target.value)
    dispatch({type: 'HANDLE_FORM_NAME_CHANGE', payload: e.target.value})
  }

  function addPlayer (e) {
    e.preventDefault()
    
  }

  return (
    <div>
      <h1>Compare Players</h1>
      <form>
        <label>Player Name: </label>
        <input type="text" name="playerName" onChange={handleNameChange}></input>
        <input type="submit" onClick={addPlayer}></input>
      </form>
    </div>
  )
}
