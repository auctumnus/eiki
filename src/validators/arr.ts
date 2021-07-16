import { ValidationFunction } from '../types'

/**
 * Returns a function which returns true either if the given object is an array,
 * or if all members of that array pass a validation function.
 * @param s The function to use for validation.
 * @returns A function which can be used to test if a value is an array and all members pass
 * a validation function.
 * @example
 * const stringArr = arr(str)
 * stringArr(['a'])            // true
 * stringArr(['a', 2])         // false
 * stringArr([])               // true
 * const anyArr = arr()
 * anyArr([])                  // true
 * anyArr([undefined, 'a', 2]) // true
 */
export const arr = (s?: ValidationFunction) => (a: any) =>
  Array.isArray(a) && s ? a.every((o: any) => s(o)) : true
