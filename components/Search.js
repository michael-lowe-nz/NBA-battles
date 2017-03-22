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
  return (
    <div className="search">
      <form>
        <label>Player Name: </label>
        <input type="text" name="playerName" placeholder="name" autoComplete="off" value={ state.form.name ? state.form.name : ""} onChange={handleNameChange}></input>
        <input className="submit" type="submit" value="ADD PLAYER" onClick={addPlayer} ></input>
      </form>
    </div>
  )
}
