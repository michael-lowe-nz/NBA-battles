import React from 'react'

module.exports = ({playerInfo}) => {
  const { pts, reb, ast } = playerInfo
  console.log(playerInfo)
  return (
    <div className="stats">
      <div className="points statCol">
        <h3>PPG</h3>
        <h2 className="statNumber">{pts}</h2>
      </div>
      <div className="rebounds statCol">
        <h3>RPG</h3>
        <h2 className="statNumber statCol">{reb}</h2>
      </div>
      <div className="points statCol">
        <h3>APG</h3>
        <h2 className="statNumber">{ast}</h2>
      </div>
    </div>
  )
}
