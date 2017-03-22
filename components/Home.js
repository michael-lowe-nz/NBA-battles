import React from 'react'

import Player from './Player'
import Players from './Players'
import getPlayer from '../api/getPlayer'

module.exports = ({state, dispatch}) => {
  function handleNameChange (e) {
    e.preventDefault()
    dispatch({type: 'HANDLE_FORM_NAME_CHANGE', payload: e.target.value})
  }

  function addPlayer (e) {
    e.preventDefault()
    getPlayer(state, dispatch)
  }

  return (
    <div>
      <h1>Compare Players</h1>
      <form>
        <label>Player Name: </label>
        <input type="text" name="playerName" onChange={handleNameChange}></input>
        <input type="submit" onClick={addPlayer}></input>
      </form>
      <div className="players">
        <Players state={state} dispatch={dispatch}/>
      </div>
    </div>
  )
}
