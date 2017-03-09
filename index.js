import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import { createStore } from 'redux'
import reducer from './reducer'
import { Provider } from 'react-redux'

var initialState = {
  name: 'NBA Battle',
  currentPage: 'index',
  playerOne: null,
  playerTwo: null
}

const store = createStore(reducer, initialState)
const { subscribe } = store

subscribe(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('main')
  )
})

dispatch({type: 'INIT'})
