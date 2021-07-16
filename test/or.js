const { test } = require('uvu')
const assert = require('uvu/assert')
const { or, str, num } = require('./eiki')

const strOrNum = or(str, num)

test('or', () => {
  assert.ok(strOrNum('a'))
  assert.ok(strOrNum(2))

  assert.not.ok(strOrNum({}))
})

test.run()
