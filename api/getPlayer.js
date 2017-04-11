import NBA from 'nba'

module.exports = (playerName, dispatch) => {
  const playerToAdd = NBA.findPlayer(playerName)
  if(playerToAdd) {
    dispatch({type: "TOGGLE_PLAYER_LOADING"})
    dispatch({type: 'HANDLE_FORM_NAME_CHANGE', payload: ""})
    dispatch({type: 'CLEAR_SUGGESTIONS'})
    NBA.stats.playerInfo({ PlayerID: playerToAdd.playerId})
      .then(function (response) {
        dispatch({type: 'RECEIVE_PLAYER_INFO', payload: response.playerHeadlineStats[0]})
        dispatch({type: "TOGGLE_PLAYER_LOADING"})
      })
      .catch(function (error) {
        console.log('Error:', error)
      })
  }
}
