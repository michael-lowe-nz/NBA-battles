import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Player from './Player'
import PlayerLoading from './PlayerLoading'
import TableHeaders from './TableHeaders'

module.exports = ({state, dispatch}) => {
  const sortObj = state.columns.find(column => column.sorted === true)
  let playersArray = state.players
  if (sortObj) {
    if (sortObj.isDescending) {
      playersArray = playersArray.sort((a, b) => b[sortObj.statName] - a[sortObj.statName])
    } else {
      playersArray = playersArray.sort((a, b) => a[sortObj.statName] - b[sortObj.statName])
    }
  }
  const playersRender = playersArray.map((player, index) => <Player key={player.playerId} playerInfo={player}/>)
  return (
    <table className="table">
      <TableHeaders state={state} dispatch={dispatch}/>
      <tbody>
        {playersRender}
      </tbody>
    </table>
  )
}
