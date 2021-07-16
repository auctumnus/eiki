const { test } = require('uvu')
const assert = require('uvu/assert')
const { len } = require('./eiki')

const max3 = len({ max: 3 })

test('len', () => {
  assert.ok(max3(['a']))
  assert.ok(max3('aa'))

  assert.not.ok(max3(3))
  assert.not.ok(max3('aaaaaaaaaaaaaaaa'))
})

test.run()
