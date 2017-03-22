module.exports = (state, action) => {
  const newState = require('clone')(state)
  const {type, payload} = action
  switch (type) {
    case 'CHANGE_PAGE':
      newState.currentPage = payload
      return newState
    case 'RECEIVE_PLAYER_INFO':
      if (!newState.playerOne) newState.playerOne = payload
      else newState.playerTwo = payload
      return newState
    case 'HANDLE_FORM_NAME_CHANGE':
      newState.form.name = payload
      return newState
    default:
      return newState
  }
}
