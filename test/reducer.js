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
