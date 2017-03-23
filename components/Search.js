import React from 'react'

import getPlayer from '../api/getPlayer'

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
  function clearPlayers (e) {
    e.preventDefault()
    dispatch({type: 'CLEAR_PLAYERS'})
  }
  return (
    <div className="search">
      <form>
        <input type="text" className="formElement" name="playerName" placeholder="Player Name" autoComplete="off" value={ state.form.name ? state.form.name : ""} onChange={handleNameChange}></input>
        <input className="formElement button" type="submit" value="ADD PLAYER" onClick={addPlayer} ></input>
        <input className="formElement button" type="submit" value="CLEAR" onClick={clearPlayers} ></input>
      </form>
    </div>
  )
}
