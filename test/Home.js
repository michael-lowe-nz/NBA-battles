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
  const component = createComponent.shallow(<Home />)
  t.true(component.props.state)
  t.true(component.props.dispatch)
  t.end()
})
