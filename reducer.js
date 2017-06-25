module.exports = (state, action) => {
  const newState = require('clone')(state)
  const {type, payload} = action
  switch (type) {
    case 'CHANGE_PAGE':
      newState.currentPage = payload
      return newState
    case 'INITIATE_PLAYER':
      newState.players.push({
        playerId: payload.playerId,
        playerName: payload.playerName,
        loading: true
      })
      return newState
    case 'HYDRATE_PLAYER':
      const newPlayer  = payload
      newPlayer.loading = false
      newState.players = newState.players.map(player => player.playerId === newPlayer.playerId ? newPlayer : player)
      return newState
    case 'HANDLE_FORM_NAME_CHANGE':
      newState.form.name = payload
      return newState
    case 'ADD_SUGGESTIONS':
      newState.form.suggestions = payload
      return newState
    case 'CLEAR_SUGGESTIONS':
      newState.form.suggestions = []
      return newState
    case 'HANDLE_CLICK_SUGGESTION':
      newState.form.clickedSuggestion = payload
      return newState
    case 'CLEAR_CLICK_SUGGESTION':
      newState.form.clickedSuggestion = null
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
