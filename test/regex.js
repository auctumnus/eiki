const { test } = require('uvu')
const assert = require('uvu/assert')
const { regex } = require('./eiki')

const isLowercaseAlphabet = regex(/^[a-z]+$/)

test('regex', () => {
  assert.ok(isLowercaseAlphabet('aaa'))
  assert.not.ok(isLowercaseAlphabet(undefined))
  assert.not.ok(isLowercaseAlphabet('AAA'))
})

test.run()
