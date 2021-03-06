import React from 'react'

import PlayerLoading from './PlayerLoading'
import DeleteButton from '../svg/delete-button'
import Stats from './Stats'
import PlayerImage from './PlayerImage'

import Loading from "react-md-spinner"

module.exports = ({ playerInfo }) => {
  if (playerInfo.loading) {
    return <PlayerLoading playerName={playerInfo.playerName}/>
  }
  console.log('player', playerInfo)
  return (
    <tr>
      <td className="playerName">
        {playerInfo.playerName}
        <PlayerImage playerId={playerInfo.playerId}/>
      </td>
      <td>{playerInfo.pts}</td>
      <td>{playerInfo.ast}</td>
      <td>{playerInfo.reb}</td>
      <td>{playerInfo.fgPct}</td>
      <td>{playerInfo.fg3Pct}</td>
      <td>{playerInfo.ftPct}</td>
      <td>{playerInfo.stl}</td>
      <td>{playerInfo.blk}</td>
    </tr>
  )
}
