//http://stats.nba.com/media/players/230x185/201939.png
import NBA from 'nba'
import request from 'superagent'

module.exports = (state, dispatch) => {
  const playerToAdd = NBA.findPlayer(state.form.name)
  console.log("Search player:", NBA.searchPlayers(state.form.name))
  if(playerToAdd) {
    dispatch({type: "CHANGE_PLAYER_LOADING", payload: true})
    NBA.stats.playerInfo({ PlayerID: playerToAdd.playerId})
      .then(function (response) {
        dispatch({type: 'RECEIVE_PLAYER_INFO', payload: response.playerHeadlineStats[0]})
        dispatch({type: "CHANGE_PLAYER_LOADING", payload: false})
      })
      .catch(function (error) {
        console.log('Error:', error)
      })
  }
}
