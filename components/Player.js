import React from 'react'

module.exports = ({playerInfo, dispatch}) => {
  if (playerInfo) {
    return (
      <div className="player">
        <h1>{playerInfo.fullName}</h1>
        <img src={"http://stats.nba.com/media/players/230x185/"+ playerInfo.playerId +".png"}></img>
      </div>
    )
  }
}
