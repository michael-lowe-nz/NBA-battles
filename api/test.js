const NBA = require('nba')

const teamid = NBA.teamIdFromName("Celtics")

NBA.stats.commonTeamRoster({
  teamid
})
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
