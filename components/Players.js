import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Player from './Player'

module.exports = ({state, dispatch}) => {
  if (state.players.length > 0) {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Player</th>
            <th>PPG</th>
            <th>APG</th>
            <th>RPG</th>
            <th>FG%</th>
            <th>3PM%</th>
            <th>FT%</th>
            <th>STL</th>
            <th>BLK</th>
          </tr>
        </thead>
        <tbody>
          {state.players.map(function (player, index) {
            return (<Player playerInfo={player} dispatch={dispatch} key={index} index={index}/>)
          })}
        </tbody>
      </table>
    )
  }
  return null
}
