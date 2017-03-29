import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import createComponent from 'react-unit';
import test from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';

test('Base test for Home.js should pass', t => {
  t.pass('passes for home.js')
  t.end()
})
