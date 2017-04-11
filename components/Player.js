import React from 'react'
import DeleteButton from '../svg/delete-button'

module.exports = ({playerInfo, dispatch, index}) => {
  function removePlayer () {
    dispatch({type: 'REMOVE_PLAYER', payload: index})
  }
  if (playerInfo) {
    return (
      <div className="player">
        <div className="remove-button" onClick={removePlayer}>
          <DeleteButton/>
        </div>
        <h2>{playerInfo.playerName}</h2>
        <img src={"http://stats.nba.com/media/players/230x185/"+ playerInfo.playerId +".png"}></img>
        <div className="stats">
          <table>
            <tr>
              <th>PPG.</th>
              <th>RPG.</th>
              <th>APG.</th>
            </tr>
            <tr>
              <td>{playerInfo.pts}</td>
              <td>{playerInfo.reb}</td>
              <td>{playerInfo.ast}</td>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}
