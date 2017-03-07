import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import { createStore } from 'redux'
import reducer from './reducer'

// render(<App name='NBA-battles' />, document.querySelector('main'))

const main  = document.querySelector('main')

var initialState = {
  name: 'NBA Battle',
  currentPage: 'index',
  playerOne: null,
  playerTwo: null
}

const { dispatch, getState, subscribe } = createStore(reducer, initialState)

subscribe(() => {
  const currentPage = getState().currentPage
  render(<App state={getState()} dispatch={dispatch} />, main)
})

dispatch({type: 'INIT'})
