import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import getPlayer from '../api/getPlayer'
import reducer from '../reducer'
import Provider from 'react-redux'

import Player from './Player'
import Home from './Home'

function App () {
    return (
        <Router history={hashHistory}>
          <Route path='/' component={Home} />
          <Route path='/player' component={Player}/>
        </Router>
    )
}

export default App
