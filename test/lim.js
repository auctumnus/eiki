const { test } = require('uvu')
const assert = require('uvu/assert')
const { lim } = require('./eiki')

const max5min3 = lim({ max: 5, min: 3 })

test('lim', () => {
  assert.ok(max5min3(4))
  assert.not.ok(max5min3(undefined))
  assert.not.ok(max5min3(2))
  assert.not.ok(max5min3(2000))
})

test.run()
