import React from 'react'

import getPlayer from '../api/getPlayer'

module.exports = () => {
  console.log('This is the state:', context.store)
  getPlayer(store.dispatch)
  return <h1>Player Component</h1>
}
