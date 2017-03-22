import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Router, Route, browserHistory} from 'react-router'

import App from './components/app'
import reducer from './reducer'

var initialState = {
  name: 'NBA Battle',
  currentPage: 'index',
  playerOne: null,
  playerTwo: null
}

const store = createStore(reducer, initialState)
const { subscribe, dispatch, getState } = store

subscribe(() => {
  render(<App />,document.querySelector('main'))
})

dispatch({type: 'INIT'})
