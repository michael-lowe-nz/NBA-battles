import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import { createStore } from 'redux'

// render(<App name='NBA-battles' />, document.querySelector('main'))
console.log('welcome to NBA-battles')

const main  = document.querySelector('main')

var initialState = {
  currentPage: 'index',
  playerOne: null,
  playerTwo: null
}

const { dispatch, getState, subscribe } = createStore(reducer, initialState)

subscribe(() => {
  const currentPage = getState().currentPage
  render(<App state={getState()} />, main)
})
