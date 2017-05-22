import NBA from 'nba'
import request from 'superagent'

// http://stats.nba.com/stats/commonplayerinfo?PlayerID=203077&SeasonType=Regular%20Season&LeagueID=00

module.exports = (playerName, dispatch) => {
  const playerToAdd = NBA.findPlayer(playerName)
  if(playerToAdd) {
    dispatch({type: "TOGGLE_PLAYER_LOADING"})
    dispatch({type: 'HANDLE_FORM_NAME_CHANGE', payload: ""})
    dispatch({type: 'CLEAR_SUGGESTIONS'})
    NBA.stats.playerProfile({ PlayerID: playerToAdd.playerId})
      .then(function (response) {
        console.log(response)
        dispatch({type: 'RECEIVE_PLAYER_INFO', payload: response.careerTotalsRegularSeason[0]})
        dispatch({type: "TOGGLE_PLAYER_LOADING"})
      })
      .catch(function (error) {
        console.log('Error:', error)
      })
  }
}
