//http://stats.nba.com/media/players/230x185/201939.png

module.exports = (state, dispatch) => {
  dispatch({type: 'RECEIVE_PLAYER_INFO', payload: {
    name: "Klay Thompson",
    team: "Golden State Warriors",
    playerID: 1024109,
    ppg: 21.9,
    apg: 3.5,
    rpg: 4.2,
    image: "http://stats.nba.com/media/players/230x185/202691.png"
  }})
}
