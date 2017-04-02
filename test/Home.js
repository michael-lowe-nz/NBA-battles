import React from 'react'
import { createRenderer } from 'react-addons-test-utils'
import createComponent from 'react-unit'
import tape from 'tape'
import addAssertions from 'extend-tape'
import jsxEquals from 'tape-jsx-equals'
const test = addAssertions(tape, {jsxEquals})

import Home from '../components/Home'

const testState = {
  name: 'NBA Battle',
  currentPage: 'index',
  players: [],
  form: {
    name: null,
    suggestions: []
  },
  isLoading: false
}

test('Base test for Home.js should pass', t => {
  t.pass('passes for home.js')
  t.end()
})

test('React Components Test: Home.js', t => {
  const component = createComponent.shallow(<Home state={testState} test={"michael"}/>)
  t.equal(component.props.className, "app", "Classname is App on the Home component")
  t.deepEquals(component.props.state, testState, "The state is the same as the one fed in")
  t.equal(component.test, "michael", "testing to see if props are accessible")
  t.end()
})
