import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import getPlayer from '../api/getPlayer'
import reducer from '../reducer'
import { Provider } from 'react-redux'

import Home from './Home'
import Main from './Main'

function App ({state, dispatch}) {
    return (
      <Home state={state} dispatch={dispatch}/>
    )
}

export default App
