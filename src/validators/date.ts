import { str } from './str'
/**
 * Returns true if `o` is a valid date string.
 * @param o The data to test.
 * @returns A boolean describing if the data is a date string.
 * @example
 * date('2021-01-07') // true
 * date('a')          // false
 * date(3)            // false, because this tests for a date _string_
 */
export const date = (o: any) => str(o) && !Number.isNaN(Date.parse(o))
