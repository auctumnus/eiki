import { ValidationFunction } from '../types'

/**
 * Returns a function which will return true if every validation function
 * returns true for a given value.
 * @param ...funcs The functions to test with.
 * @returns The function which can test the value.
 */
export const and =
  (...funcs: ValidationFunction[]) =>
  (o: any) =>
    funcs.every((func) => func(o))
