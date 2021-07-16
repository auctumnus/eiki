const { test } = require('uvu')
const assert = require('uvu/assert')
const { loose, str } = require('./eiki')

const schema = loose({
  a: str,
  b: str,
})

const a = {
  a: 'a',
}

const b = {
  b: 'b',
}

const ab = {
  a: 'a',
  b: 'b',
}

const none = {}

test('loose', () => {
  assert.ok(schema(a))
  assert.ok(schema(b))
  assert.ok(schema(ab))
  assert.ok(schema(none))

  assert.not.ok(schema('a'))
  assert.not.ok(schema(undefined))
})

test.run()
