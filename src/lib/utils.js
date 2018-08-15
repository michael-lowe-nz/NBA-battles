import NBA from 'nba'

const utils = {
  getPlayers() {
    const suggestions = NBA.searchPlayers("")
    return suggestions
  }
}

module.exports = utils
