import { undef } from './undefined'

/**
 * Checks that a value is not undefined.
 * @param o The value to check.
 * @returns Whether the value is defined.
 */
export const def = (o: any) => !undef(o)
