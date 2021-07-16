import fromEntries from 'fromentries'
import { obj, Schema } from './obj'
import { maybe } from './maybe'

const makeLoose = (s: Schema) =>
  fromEntries(Object.entries(s).map(([key, value]) => [key, maybe(value)]))

export const loose = (s: Schema) => obj(makeLoose(s))
