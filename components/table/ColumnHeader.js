import React from 'react'

module.exports = ({ column, dispatch }) => {
  function handleClick () {
    if (column.sorted) {
      dispatch({
        type: 'UPDATE_COLUMN',
        payload: {
          columnName: column.columnName,
          isDescending: !column.isDescending
        }
      })
    } else {
      dispatch({
        type: 'UPDATE_COLUMN',
        payload: {
          columnName: column.columnName,
          isDescending: true
        }
      })
    }
  }
  if (column.sorted) {
    const directionIndicator = column.isDescending ? 'icon is-medium sortedCol fa fa-arrow-circle-o-down' : 'icon is-medium fa fa-arrow-circle-o-up'
    return <th id="sortedCol" onClick={handleClick}>{column.columnName}<i className={directionIndicator} aria-hidden="true"/></th>
  } else {
    return <th onClick={handleClick}>{column.columnName}</th>
  }
}
