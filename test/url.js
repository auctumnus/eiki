const { test } = require('uvu')
const assert = require('uvu/assert')
const { url } = require('./eiki')

test('url', () => {
  assert.ok(url('https://google.com'))
  assert.ok(url('http://google.com'))
  assert.ok(url('ftp://example.com'))
  // did you know, urls are _really_ weird?
  // this is totally a side tangent in comments nobody will read,
  // but you should go check out the rfc or https://www.youtube.com/watch?v=0uejy9aCNbI
  // its WEIRD
  // this url got someone $7.5k lmao
  assert.ok(url('https://someService.googleapis.com/..;@custom_domain.com/'))

  assert.not.ok(url('google.com'))
  assert.not.ok(url(undefined))
  assert.not.ok(url(2))
  assert.not.ok(url(''))
})

test.run()
