module.exports = (state, action) => {
  const newState = require('clone')(state)
  const {type, payload} = action
  switch (type) {
    case 'CHANGE_PAGE':
      newState.currentPage = payload
      return newState
    case 'RECEIVE_PLAYER_INFO':
      newState.playerOne = payload
      return newState
    default:
      return newState
  }
  return newState
}
