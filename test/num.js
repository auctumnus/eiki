const { test } = require('uvu')
const assert = require('uvu/assert')
const { num } = require('./eiki')

test('num', () => {
  assert.ok(num(1))

  assert.not.ok(num('a'))
  assert.not.ok(num({}))
  assert.not.ok(num([2]))
})

test.run()
