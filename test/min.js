const { test } = require('uvu')
const assert = require('uvu/assert')
const { min } = require('./eiki')

const min3 = min(3)

test('min', () => {
  assert.ok(min3(2000))
  assert.not.ok(min3(2))
  assert.not.ok(min3(undefined))
})

test.run()
