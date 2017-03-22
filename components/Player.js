import React from 'react'

module.exports = ({playerInfo, dispatch}) => {
  if (playerInfo) {
    return (
      <div className="player">
        <h2>{playerInfo.playerName}</h2>
        <img src={"http://stats.nba.com/media/players/230x185/"+ playerInfo.playerId +".png"}></img>
        <div className="stats">
          <p>PPG: {playerInfo.pts}</p>
          <p>RPG: {playerInfo.reb}</p>
          <p>APG: {playerInfo.ast}</p>
        </div>
      </div>
    )
  }
}
