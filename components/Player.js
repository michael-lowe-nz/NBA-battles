import React from 'react'

module.exports = ({playerInfo, dispatch}) => {
  if (playerInfo) {
    return (
      <div className="player">
        <h1>{playerInfo.name}</h1>
        <img src={playerInfo.image}></img>
      </div>
    )
  }
  return <p>Add a player</p>
}
