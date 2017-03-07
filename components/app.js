import React, { Component } from 'react'
import getPlayer from '../api/getPlayer'
import reducer from '../reducer'

class App extends Component {

  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <h1>Welcome to {this.props.name}</h1>
        <button onClick={()=>{
          getPlayer(this.props.dispatch)
        }}>Add Klay!</button>
      </div>
    )
  }

}

export default App
