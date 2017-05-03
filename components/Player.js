import React from 'react'

import DeleteButton from '../svg/delete-button'
import Stats from './Stats'

module.exports = ({playerInfo, dispatch, index}) => {
  function removePlayer () {
    dispatch({type: 'REMOVE_PLAYER', payload: index})
  }
  if (playerInfo) {
    return (
      <div className="container">
        <div className="row">
          <div className="three columns player">
            <div className="player-image">
              <img src={`http://stats.nba.com/media/players/230x185/${playerInfo.playerId}.png`}></img>
            </div>
            <div className="playerName">
              <h2>{playerInfo.playerName}</h2>
            </div>
          </div>
          <Stats playerInfo={playerInfo}/>
        </div>
      </div>
    )
  }
  return null
}
