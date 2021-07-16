const { test } = require('uvu')
const assert = require('uvu/assert')
const { str } = require('./eiki')

test('str', () => {
  assert.ok(str('str'))
  assert.ok(str(''))

  assert.not.ok(str(2))
  assert.not.ok(str({}))
  assert.not.ok(str([]))
})

test.run()
