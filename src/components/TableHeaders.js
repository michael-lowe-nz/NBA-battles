import React from 'react'
import sortPlayers from '../lib/sortPlayers'

import ColumnHeader from './table/ColumnHeader'

module.exports = ({ state, dispatch }) => {
  function sortColumn () {
    const sortedPlayers = sortPlayers(state.players, 'pts', true)
    dispatch({type: 'UPDATE_PLAYER_ARRAY', payload: sortedPlayers})
  }
  return (
    <thead>
      <tr>
        {state.columns.map(column => <ColumnHeader key={column.columnName} column={column} dispatch={dispatch}/>)}
      </tr>
    </thead>
  )
  // return (
  //   <thead>
  //     <tr>
  //       <th>Player</th>
  //       <th onClick={sortColumn}>PPG<i className="fa fa-arrow-circle-o-up" aria-hidden="true"></i></th>
  //       <th>APG<i className="fa fa-arrow-circle-o-down" aria-hidden="true"></i></th>
  //       <th>RPG</th>
  //       <th>FG%</th>
  //       <th>3P%</th>
  //       <th>FT%</th>
  //       <th>STL</th>
  //       <th>BLK</th>
  //     </tr>
  //   </thead>
  // )
}
