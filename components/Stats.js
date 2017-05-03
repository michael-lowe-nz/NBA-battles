import React from 'react'

module.exports = ({playerInfo}) => {
  const { pts, reb, ast } = playerInfo
  console.log(playerInfo)
  return (
    <div className="stats">
      <div className="points">
        <p>points per game</p>
        <h2 className="statNumber">{pts}</h2>
      </div>
      <div className="rebounds">
        <p>rebounds per game</p>
        <h2 className="statNumber">{reb}</h2>
      </div>
      <div className="points">
        <p>assists per game</p>
        <h2 className="statNumber">{ast}</h2>
      </div>
    </div>
  )
}
