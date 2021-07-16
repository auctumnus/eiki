const { test } = require('uvu')
const assert = require('uvu/assert')
const { max } = require('./eiki')

const max3 = max(3)

test('max', () => {
  assert.ok(max3(2))
  assert.ok(max()(2))
  assert.not.ok(max3(2000))
  assert.not.ok(max3(undefined))
})

test.run()
