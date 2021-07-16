const { test } = require('uvu')
const assert = require('uvu/assert')
const { arr, str, num } = require('./eiki')

test('arr', () => {
  assert.ok(arr(str)(['a', 'b', 'c']))
  assert.ok(arr(num)([1, 2, 3]))
  assert.ok(arr(str)([]))
  assert.ok(arr()([]))
  assert.ok(arr()([1, 'a', undefined]))

  assert.not.ok(arr(str)(['a', 1]))
  assert.not.ok(arr(str)([undefined]))
})

test.run()
