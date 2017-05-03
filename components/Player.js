import React from 'react'

import DeleteButton from '../svg/delete-button'
import Stats from './Stats'

module.exports = ({playerInfo, dispatch, index}) => {
  function removePlayer () {
    dispatch({type: 'REMOVE_PLAYER', payload: index})
  }
  if (playerInfo) {
    return (
      <div className="player">
        <div className="remove-button" onClick={removePlayer}>
          <DeleteButton />
        </div>
        <div className="player-image">
          <img src={`http://stats.nba.com/media/players/230x185/${playerInfo.playerId}.png`}></img>
        </div>
        <div className="playerName">
          <h2>{playerInfo.playerName}</h2>
        </div>
        <Stats playerInfo={playerInfo}/>
      </div>
    )
  }
  return null
}
