const { test } = require('uvu')
const assert = require('uvu/assert')
const { date } = require('./eiki')

const iso = new Date().toISOString()
const utc = new Date().toUTCString()
const stringed = new Date().toString()

test('date', () => {
  assert.ok(date(iso))
  assert.ok(date(utc))
  assert.ok(date(stringed))

  assert.not.ok(date(2))
  assert.not.ok(date('a'))
})

test.run()
