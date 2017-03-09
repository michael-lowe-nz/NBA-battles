import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import getPlayer from '../api/getPlayer'
import reducer from '../reducer'
import Provider from 'react-redux'

import Player from './Player'
import Home from './Home'

function App ({state}) {
    return (
      <Provider store={state} >
        <Router history={hashHistory}>
          <Route path='/' component={Home} />
        </Router>
      </Provider>
    )
}

export default App
