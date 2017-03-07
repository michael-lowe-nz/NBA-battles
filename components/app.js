import React, { Component } from 'react'
import getPlayer from '../api/getPlayer'
import reducer from '../reducer'

import Player from './Player'

class App extends Component {

  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <h1>Welcome to {this.props.state.name}</h1>
        <button onClick={()=>{
          getPlayer(this.props.dispatch)
        }}>Add Klay!</button>
        <Player state={this.props.state}/>
      </div>
    )
  }

}

export default App
