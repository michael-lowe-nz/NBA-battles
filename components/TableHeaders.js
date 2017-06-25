import React from 'react'
import sortPlayers from '../lib/sortPlayers'

module.exports = ({ state, dispatch }) => {
  function sortColumn () {
    const sortedPlayers = sortPlayers(state.players, 'pts', true)
    dispatch({type: 'UPDATE_PLAYER_ARRAY', payload: sortedPlayers})
  }
  return (
    <thead>
      <tr>
        <th>Player</th>
        <th onClick={sortColumn}>PPG</th>
        <th>APG</th>
        <th>RPG</th>
        <th>FG%</th>
        <th>3P%</th>
        <th>FT%</th>
        <th>STL</th>
        <th>BLK</th>
      </tr>
    </thead>
  )
}
