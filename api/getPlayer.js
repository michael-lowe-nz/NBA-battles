//http://stats.nba.com/media/players/230x185/201939.png

module.exports = (dispatch) => {
  dispatch({type: 'RECEIVE_PLAYER_INFO', payload: {
    name: "Klay Thompson",
    team: "Golden State Warriors",
    ppg: 21.9,
    apg: 3.5,
    rpg: 4.2,
    image:`http://stats.nba.com/media/players/230x185/201939.png`
  }})
}
