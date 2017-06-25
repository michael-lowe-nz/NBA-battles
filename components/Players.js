import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Player from './Player'
import PlayerLoading from './PlayerLoading'
import TableHeaders from './TableHeaders'

module.exports = ({state, dispatch}) => {
  return (
    <table className="table">
      <TableHeaders state={state} dispatch={dispatch}/>
      <tbody>
        {state.players.map((player, index) => <Player key={player.playerId} playerInfo={player}/>)}
        <PlayerLoading playerName="Testing guy"/>
      </tbody>
    </table>
  )
}
