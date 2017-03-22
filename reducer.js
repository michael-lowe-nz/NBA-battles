module.exports = (state, action) => {
  const newState = require('clone')(state)
  const {type, payload} = action
  switch (type) {
    case 'CHANGE_PAGE':
      newState.currentPage = payload
      return newState
    case 'RECEIVE_PLAYER_INFO':
      newState.players.push(payload)
      return newState
    case 'HANDLE_FORM_NAME_CHANGE':
      newState.form.name = payload
      return newState
    case 'CHANGE_PLAYER_LOADING':
      newState.isLoading = payload
      return newState
    default:
      return newState
  }
}
