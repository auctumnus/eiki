const { test } = require('uvu')
const assert = require('uvu/assert')
const { def } = require('./eiki')

test('def', () => {
  assert.ok(def(1))
  assert.ok(def(0))
  assert.ok(def(false))

  assert.not.ok(def(undefined))
})

test.run()
