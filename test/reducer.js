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

test.skip('Reducer can hydrate a players in state players array', t => {
  const initialState = {
    currentPage: '/index',
    players: [
      {
        name: 'Stephen Curry',
        playerId: '01'
      }
    ]
  }
  freeze(initialState)
  const expected = {
    currentPage : '/index',
    players : [{
      name: 'Stephen Curry',
      playerId: '01',
      ppg: 25
    }]
  }
  const actual = reducer(initialState, {type: 'HYRDATE_PLAYER', payload: {
    name: 'Stephen Curry',
    playerId: '01',
    team: 'Golden State Warriors',
    ppg: 25
  }}
  )
  t.deepEqual(actual, expected, 'Reducer adds the new players info correctly')
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

test('ADD_SUGGESTIONS can put suggestions for autocomplete in the state.forms.suggestions', t => {
  const initialState = {
    form: {
      name: "Kev",
      suggestions: []
    }
  }
  freeze(initialState)
  const expected = {
    form: {
      name: "Kev",
      suggestions: [
        {fullName: "Kevin Durant"},
        {fullName: "Kevin Martin"}
      ]
    }
  }
  const actual = reducer(initialState, {type: "ADD_SUGGESTIONS", payload: [
    {fullName: "Kevin Durant"},
    {fullName: "Kevin Martin"}
  ]})
  t.deepEqual(actual, expected, 'ADD_SUGGESTIONS correctly puts the array in the state')
  t.end()
})

test('CLEAR_SUGGESTIONS can clear the suggestions in the state', t => {
  const initialState = {
    form: {
      name: "Kev",
      suggestions: [
        {fullName: "Kevin Durant"},
        {fullName: "Kevin Martin"}
      ]
    }
  }
  freeze(initialState)
  const expected = {
    form: {
      name: "Kev",
      suggestions: []
    }
  }
  const actual = reducer(initialState, {type: "CLEAR_SUGGESTIONS"})
  t.deepEqual(actual, expected, 'CLEAR_SUGGESTIONS correctly clears suggestions array in the state')
  t.end()
})

test('HANDLE_SUGGESTION_CLICK can put the player clicked in state.form.clickedSuggestion', t => {
  const initialState = {
    form: {
      name: "Kev",
      suggestions: [],
      clickedSuggestion: null
    }
  }
  freeze(initialState)
  const expected = {
    form: {
      name: "Kev",
      suggestions: [],
      clickedSuggestion: "Kevin Durant"
    }
  }
  const actual = reducer(initialState, {type: "HANDLE_CLICK_SUGGESTION", payload: "Kevin Durant"})
  t.deepEqual(actual, expected, 'HANDLE_CLICK_SUGGESTION can put Kevin Durant in the clickedSuggestion in the state')
  t.end()
})

test('CLEAR_SUGGESTION_CLICK clear the suggestionclicked field in state', t => {
  const initialState = {
    form: {
      name: "Kev",
      suggestions: [],
      clickedSuggestion: "Kevin Durant"
    }
  }
  freeze(initialState)
  const expected = {
    form: {
      name: "Kev",
      suggestions: [],
      clickedSuggestion: null
    }
  }
  const actual = reducer(initialState, {type: "CLEAR_CLICK_SUGGESTION"})
  t.deepEqual(actual, expected, 'CLEAR_CLICK_SUGGESTION can remove the contents of the field')
  t.end()
})


test('REMOVE_PLAYER can succesfully remove players by index from the players array in the state', t => {
  const initialState = {
    players : [
      {fullName: "Kevin Durant"},
      {fullName: "Russell Westbrook"}
    ]
  }
  freeze(initialState)
  const expected = {
    players : [
      {fullName: "Kevin Durant"}
    ]
  }
  const actual = reducer(initialState, {type: 'REMOVE_PLAYER', payload: 1})
  t.deepEqual(actual, expected, "Player at index 1 has been succesfully removed from the state")
  t.end()
})

test('CLEAR_PLAYERS can clear all the players in the players array', t => {
  const initialState = {
    players: [
      {fullName: "Kevin Durant"},
      {fullName: "Kobe Bryant"}
    ]
  }
  freeze(initialState)
  const expected = {
    players: []
  }
  const actual = reducer(initialState, {type: 'CLEAR_PLAYERS'})
  t.deepEqual(actual, expected, 'CLEAR_PLAYERS has left an empty array in state.players')
  t.end()
})
