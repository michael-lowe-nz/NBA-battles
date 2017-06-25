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
        loading: true
      })
      console.log('Player after init: ', newState.players)
      return newState
    case 'HYDRATE_PLAYER':
      const newPlayer  = payload
      console.log('newPlayer: ', newPlayer)
      newPlayer.loading = false
      newState.players =  newState.players
        .map(player => {
          console.log('player in map: ', player)
          console.log('player.playerId === newPlayer.playerId',player.playerId === newPlayer.playerId)
          if (player.playerId === newPlayer.playerId) {
            console.log('Match!')
            return newPlayer
          } else {
            return player
          }
        })
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
