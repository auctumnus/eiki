import { ValidationFunction } from '../types'

/**
 * Returns a validation function which returns true if any of the given functions
 * return true.
 * @param ...funcs The functions for which, if any one returns true for an object,
 * `or` will return true.
 * @returns A validation function, which returns true if any given function returns true
 * on the tested data.
 * @example
 * ```
 * const stringOrNumber = or(str, num)
 * stringOrNumber('a')       // true
 * stringOrNumber(2)         // true
 * stringOrNumber(undefined) // false
 * ```
 */
export const or =
  (...funcs: ValidationFunction[]) =>
  (o: any) =>
    funcs.some((func) => func(o))
