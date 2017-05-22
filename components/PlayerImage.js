import React from 'react'

module.exports = ( {playerId} ) => {
  return (
    <div className="player-image">
      <img className="player-image" src={`http://stats.nba.com/media/players/230x185/${playerId}.png`}></img>
    </div>
  )
}
