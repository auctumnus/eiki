import { ValidationFunction } from '../types'

export type Schema = Record<string, ValidationFunction>

/**
 * Returns a function which returns true if the validation functions in a given schema all pass.
 * @param s A schema - an object with keys mapping to boolean validation functions.
 * @returns A function which can be used to validate objects against a schema.
 * @example
 * ```
 * const schema = obj({
 *   title: str,
 *   author: obj({
 *     firstName: str,
 *     lastName: str,
 *     age: num
 *   })
 * })
 * schema({
 *  title: 'The Law',
 *  deep: {
 *    firstName: 'Shiki',
 *    lastName: 'Eiki',
 *    age: 32498
 *  }
 * }) // true
 * schema(undefined) // false
 * schema({
 *  title: 'The Grimoire of Marisa',
 *  description: '', // We don't care if additional keys are added.
 *  deep: obj({
 *      firstName: 'Marisa',
 *      lastName: 'Kirisame' // And in non-strict, we don't care if keys aren't present.
 *  }) // true
 * })
 * const strictSchema = obj({
 *   name: str,
 *   age: num
 * }, true) // Ensure you set `strict` if you want to ensure that every key is present.
 * strictSchema({ }) // false
 * ```
 */
export const obj = (s: Schema) => (o: any) =>
  // First, check if `o` itself is defined.
  o === undefined
    ? false
    : // Then, ensure that this value is an object instead of some other base type.
    typeof o !== 'object'
    ? false
    : // For every entry in the schema...
      Object.entries(s).every(
        // Get the validation function for the key.
        ([key, func]) =>
          // Run the function on this key.
          func(o[key])
      )
