import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Player from './Player'
import PlayerLoading from './PlayerLoading'
import TableHeaders from './TableHeaders'

module.exports = ({state, dispatch}) => {
  const sortInfo = state.columns.find(column => column.sorted)
  const playerSorted = state.players.sort((a, b) => a[sortInfo.columnName])
  const playersRender = state.players.map((player, index) => <Player key={player.playerId} playerInfo={player}/>)
  return (
    <table className="table">
      <TableHeaders state={state} dispatch={dispatch}/>
      <tbody>
        {playersRender}
      </tbody>
    </table>
  )
}
