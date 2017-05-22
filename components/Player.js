import React from 'react'

import DeleteButton from '../svg/delete-button'
import Stats from './Stats'
import PlayerImage from './PlayerImage'

module.exports = ({playerInfo, dispatch, index}) => {
  function removePlayer () {
    dispatch({type: 'REMOVE_PLAYER', payload: index})
  }
  console.log(playerInfo)
  if (playerInfo) {
    return (
      <tr>
        <td>
          {playerInfo.playerName}
        </td>
        <td>{playerInfo.pts}</td>
        <td>{playerInfo.ast}</td>
        <td>{playerInfo.reb}</td>
      </tr>
    )
  }
  return null
}
