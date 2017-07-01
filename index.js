import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Router, Route, browserHistory} from 'react-router'

import App from './components/app'
import reducer from './reducer'

var initialState = {
  name: 'NBA Battle',
  currentPage: 'index',
  columns: [
    {
      columnName: "Player",
      statName: "fullName",
      sorted: true,
      isDescending: false,
    },
    {
      columnName: "PPG",
      statName: "pts",
      sorted: false,
      isDescending: false,
    },
    {
      columnName: "APG",
      statName: "ast",
      sorted: false,
      isDescending: false,
    },
    {
      columnName: "RPG",
      statName: "reb",
      sorted: false,
      isDescending: false,
    },
    {
      columnName: "FG%",
      statName: "fgPct",
      sorted: false,
      isDescending: false,
    },
    {
      columnName: "3P%",
      statName: "fg3Pct",
      sorted: false,
      isDescending: false,
    },
    {
      columnName: "FT%",
      statName: "ftPct",
      sorted: false,
      isDescending: false,
    },
    {
      columnName: "STL",
      statName: "stl",
      sorted: false,
      isDescending: false,
    },
    {
      columnName: "BLK",
      statName: "blk",
      sorted: false,
      isDescending: false,
    },
  ],
  players: [],
  form: {
    name: "",
    suggestions: [],
  }
}

const store = createStore(reducer, initialState)
const { subscribe, dispatch, getState } = store

subscribe(() => {
  render(<App dispatch={dispatch} state={store.getState()} />, document.querySelector('main'))
})

dispatch({type: 'INIT'})
