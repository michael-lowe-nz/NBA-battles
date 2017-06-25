import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Player from './Player'

module.exports = ({state, dispatch}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Player</th>
          <th>PPG</th>
          <th>APG</th>
          <th>RPG</th>
          <th>FG%</th>
          <th>3P%</th>
          <th>FT%</th>
          <th>STL</th>
          <th>BLK</th>
        </tr>
      </thead>
      <tbody>
        {state.players.map((player, index) => <Player key={player.playerId} playerInfo={player}/>)}
      </tbody>
    </table>
  )
}
