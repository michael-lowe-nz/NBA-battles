import test from 'tape'
import sortPlayers from '../lib/sortPlayers'

test('sortPlayers sorts players by ppg', t => {
  const initial = [
    {
      playerName: 'Steven Adams',
      pts: 14.25
    },
    {
      playerName: 'James Harden',
      pts: 32.1
    },
    {
      playerName: 'Lebron James',
      pts: 29.5
    }
  ]
  const expected = [
    {
      playerName: 'James Harden',
      pts: 32.1
    },
    {
      playerName: 'Lebron James',
      pts: 29.5
    },
    {
      playerName: 'Steven Adams',
      pts: 14.25
    }
  ]
  const actual = sortPlayers(initial, 'pts', true)
  t.deepEqual(actual, expected, 'sortPlayers sorts descending correctly')
  t.end()
})
