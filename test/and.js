const { test } = require('uvu')
const assert = require('uvu/assert')
const { and, str, len } = require('./eiki')

const strMaxLen3 = and(str, len({ max: 3 }))

test('and', () => {
  assert.ok(strMaxLen3('aa'))
  assert.not.ok(strMaxLen3('aaaaaaaaaaaaa'))
})

test.run()
