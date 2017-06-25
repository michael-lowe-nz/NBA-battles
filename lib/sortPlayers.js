const sortPlayersBy = (players, stat, descending) => {
  return players.sort((player1, player2) => player2[stat] - player1[stat])
}

export default sortPlayersBy
