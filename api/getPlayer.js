import NBA from 'nba'
import request from 'superagent'

module.exports = (playerName, dispatch) => {
  const playerToAdd = NBA.findPlayer(playerName)
  if(playerToAdd) {
    dispatch({type: "TOGGLE_PLAYER_LOADING"})
    dispatch({type: 'HANDLE_FORM_NAME_CHANGE', payload: ""})
    dispatch({type: 'CLEAR_SUGGESTIONS'})
    NBA.stats.playerProfile({ PlayerID: playerToAdd.playerId})
      .then(function (response) {
        const playerInfo = response.careerTotalsRegularSeason[0]
        playerInfo.playerName = playerName
        console.log('Playerinfo:', response)
        dispatch({type: 'RECEIVE_PLAYER_INFO', payload: playerInfo})
        dispatch({type: "TOGGLE_PLAYER_LOADING"})
      })
      .catch(function (error) {
        console.log('Error:', error)
      })
  }
}
