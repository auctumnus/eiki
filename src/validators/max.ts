import { num } from './num'
import { def } from './defined'

/**
 * Returns a function that can check if a number is below the maximum value.
 * Max value is optional; if omitted, simply acts like `num`.
 * @param max The maximum value.
 * @returns A function which test values to tell if they're below the maximum
 * value.
 */
export const max = (max?: number) => (o: any) =>
  // Check that `o` is a number.
  num(o) &&
  // If `max` is defined...
  (def(max)
    ? // check that `o` is less than `max`.
      o < max!
    : // otherwise, just pass
      true)
