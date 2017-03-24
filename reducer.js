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
    case 'ADD_SUGGESTIONS':
      newState.form.suggestions = payload
      console.log("New state", newState.form)
      return newState
    case 'REMOVE_PLAYER':
      newState.players.splice(payload, 1)
      return newState
    case 'CLEAR_PLAYERS':
      newState.players = []
      return newState
    default:
      return newState
  }
}
