import test from 'tape'
import freeze from 'deep-freeze'
import reducer from '../reducer'

test('Base test to see if tests are set up properly', t => {
  t.pass('Should pass')
  t.end()
})

test('Reducer can change the currentPage in the state', t => {
  //ARRANGE
  const initialState = {
    currentPage: '/index',
    playerOne: null,
    playerTwo: null
  }
  freeze(initialState)
  const expected = {
    currentPage: '/about',
    playerOne: null,
    playerTwo: null
  }
  //ACT
  // initialState.currentPage = '/about'
  const actual = reducer(initialState, {type: 'CHANGE_PAGE', payload: '/about'})
  //ASSERT
  t.deepEqual(actual, expected, 'Reducer can change current page')
  t.end()
})

test('Reducer can add a players info to the state', t => {
  const initialState = {
    currentPage: '/index',
    players: []
  }
  freeze(initialState)
  const expected = {
    currentPage : '/index',
    players : [{
      name: 'Stephen Curry',
      team: 'Golden State Warriors',
      ppg: 25.4,
      apg: 6.1,
      rpg: 2.3
    }]
  }
  const actual = reducer(initialState, {type: 'RECEIVE_PLAYER_INFO', payload: {
    name: 'Stephen Curry',
    team: 'Golden State Warriors',
    ppg: 25.4,
    apg: 6.1,
    rpg: 2.3
  }}
  )
  t.deepEqual(actual, expected, 'Reducer adds the new players info correctly')
  t.end()
})

test('Adding a second players info goes into the second player in the state correctly', t => {
  const initialState = {
    currentPage: '/index',
    players: [{name: 'Stephen Curry', team: 'Golden State Warriors'}]
  }
  freeze(initialState)
  const expected = {
    currentPage: '/index',
    players: [
      {name: 'Stephen Curry', team: 'Golden State Warriors'},
      {name: 'Lebron James', team: 'Cleveland Cavaliers'}]
  }
  const actual = reducer(initialState, {type: 'RECEIVE_PLAYER_INFO', payload: {
    name: 'Lebron James', team: 'Cleveland Cavaliers'
  }}
  )
  t.deepEqual(actual, expected, 'Reducer adds the second players info correctly')
  t.end()
})

test('handleNameChange can update the form.name in the state correctly', t => {
  const initialState = {
    form: {
      name: null
    }
  }
  freeze(initialState)
  const expected = {
    form: {
      name: "Kevin Durant"
    }
  }
  const actual = reducer(initialState, {type: 'HANDLE_FORM_NAME_CHANGE', payload: "Kevin Durant"})
  t.deepEqual(actual, expected, 'Reducer adds Kevin Durant to state.form.name in the state')
  t.end()
})

test('Change_PLayer_loading can change the loading property correctly', t => {
  const initialState = {
    form: {
      name: null
    },
    players : [],
    isLoading: false
  }
  freeze(initialState)
  const expected = {
    form: {
      name: null
    },
    players : [],
    isLoading: true
  }
  const actual = reducer(initialState, {type: 'CHANGE_PLAYER_LOADING', payload: true})
  t.deepEqual(actual, expected, 'Reducer changes Kevin Durants loading to true in the state')
  t.end()
})
