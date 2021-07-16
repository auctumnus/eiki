import { lim } from './lim'
import { Limits } from '../types'
import { num } from './num'
import { def } from './defined'

const hasLength = (o: any) => def(o) && def(o.length) && num(o.length)

/**
 * Returns a function that checks that the length of this entity is within the
 * max or min.
 * If no max or min are provided, then just checks that this entity has a .length
 * property and is a number.
 * @param limits An object which describes a maximum and minimum value.
 * @returns A function which checks length.
 */
export const len = (limits: Limits) => (o: any) =>
  // basic soundness check; if no .length or .length is not number
  hasLength(o)
    ? // if it has a length, pass the limits and object length off to `lim`
      lim(limits)(o.length)
    : // otherwise, fail
      false
