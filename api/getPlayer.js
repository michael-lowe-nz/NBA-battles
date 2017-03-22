//http://stats.nba.com/media/players/230x185/201939.png
import NBA from 'nba'

module.exports = (state, dispatch) => {
  const playerToAdd = NBA.findPlayer(state.form.name)
  if (playerToAdd) {    
    dispatch({type: 'RECEIVE_PLAYER_INFO', payload: playerToAdd})
  }
}

//image: "http://stats.nba.com/media/players/230x185/202691.png"
