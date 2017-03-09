import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'
import { Provider } from 'react-redux'
import App from './components/app'


var initialState = {
  name: 'NBA Battle',
  currentPage: 'index',
  playerOne: null,
  playerTwo: null
}

const store = createStore(reducer, initialState)
const { subscribe, dispatch, getState } = store

subscribe(() => {
  render(<App state={getState()} dispatch={dispatch}/> , document.querySelector('main'))
})

dispatch({type: 'INIT'})
