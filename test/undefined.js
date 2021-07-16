const { test } = require('uvu')
const assert = require('uvu/assert')
const { undef } = require('./eiki')

test('undefined', () => {
  assert.ok(undef(undefined))
  assert.not.ok(undef(''))
  assert.not.ok(undef(0))
  assert.not.ok(undef(3))
})

test.run()
