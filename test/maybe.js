const { test } = require('uvu')
const assert = require('uvu/assert')
const { maybe, str } = require('./eiki')

const maybeStr = maybe(str)

test('maybe', () => {
  assert.ok(maybeStr('a'))
  assert.ok(maybeStr(undefined))

  assert.not.ok(maybeStr(null))
  assert.not.ok(maybeStr(1))
})

test.run()
