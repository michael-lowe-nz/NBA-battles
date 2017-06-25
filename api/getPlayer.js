import NBA from 'nba'
import request from 'superagent'

module.exports = (playerName, dispatch) => {
  const playerToAdd = NBA.findPlayer(playerName)
  if(playerToAdd) {
    console.log('Player to add: ', playerToAdd)
    dispatch({type: 'INITIATE_PLAYER', payload: {
      playerId: playerToAdd.playerId
    }})
    dispatch({type: 'HANDLE_FORM_NAME_CHANGE', payload: ""})
    dispatch({type: 'CLEAR_SUGGESTIONS'})
    NBA.stats.playerProfile({ PlayerID: playerToAdd.playerId})
      .then(function (response) {
        const playerInfo = response.careerTotalsRegularSeason[0]
        playerInfo.playerName = playerName
        dispatch({type: 'HYDRATE_PLAYER', payload: playerInfo})
      })
  }
}
