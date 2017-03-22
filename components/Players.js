import React from 'react'

import Player from './Player'

module.exports = ({state, dispatch}) => {
  if (state.playerOne) {
    return (
      <div className="players">
        <Player playerInfo={state.playerOne} dispatch={dispatch}/>
        <Player playerInfo={state.playerTwo} dispatch={dispatch}/>
      </div>
    )
  }
  return <p>No player selected</p>
}
