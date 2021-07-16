const { test } = require('uvu')
const assert = require('uvu/assert')
const { obj, str, num } = require('./eiki')

const baseSchema = {
  title: str,
  author: obj({
    firstName: str,
    lastName: str,
    age: num,
  }),
}

const schema = obj(baseSchema)

const grimoire = {
  title: "Marisa's Grimoire",
  author: {
    firstName: 'Marisa',
    lastName: 'Kirisame',
  },
}

const memento = {
  title: 'Perfect Memento in Strict Sense',
  author: {
    firstName: 'Ōta',
    lastName: "Jun'ya",
    age: 44,
  },
}

test('obj', () => {
  assert.ok(schema(memento))

  assert.not.ok(schema(grimoire))

  assert.not.ok(schema(1))
  assert.not.ok(schema(undefined))
  assert.not.ok(schema('a'))
})

test.run()
