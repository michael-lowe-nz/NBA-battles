import React from 'react'

import AnimatedNum from './AnimatedNum'

module.exports = ({playerInfo}) => {
  const { pts, reb, ast } = playerInfo
  console.log(playerInfo)
  return (
    <div className="stats">
      <div className="points statCol">
        <h3>PPG</h3>
        <AnimatedNum/>
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
