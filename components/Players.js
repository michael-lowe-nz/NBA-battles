import React from 'react'

import Player from './Player'

module.exports = ({state, dispatch}) => {
  if (state.players.length > 0) {
    return (
      <div className="players">
        {state.players.map(function (player, index) {
          return (<Player playerInfo={player} key={index}/>)
        })}
      </div>
    )
  }
  return <p>No players selected</p>
}
