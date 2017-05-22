import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Player from './Player'

module.exports = ({state, dispatch}) => {
  if (state.players.length > 0) {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Points Per Game</th>
            <th>Assists Per Game</th>
            <th>Rebounds Per Game</th>
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
