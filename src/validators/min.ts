import { num } from './num'
import { def } from './defined'

/**
 * Returns a function that can check if a number is above the minimum value.
 * Min value is optional; if omitted, simply acts like `num`.
 * @param min The minimum value.
 * @returns A function which test values to tell if they're above the minimum
 * value.
 */
export const min = (min?: number) => (o: any) =>
  num(o) && (def(min) ? o > min! : true)
