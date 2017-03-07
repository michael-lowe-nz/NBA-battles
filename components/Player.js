import React from 'react'

module.exports = (state, dispatch) => {
  console.log('State as received by Player',state.state)
  if (state.state.playerOne) {
    console.log('There is something in the state')
    return (
      <div className='player'>
      <h2>{state.state.playerOne.name}</h2>
      <img src='{state.state.playerOne.image}'></img>
      </div>
    )
  }
  else {
    return <p>Select a player</p>
  }
}
