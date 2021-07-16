import { ValidationFunction } from '../types'
import { or } from './or'
import { undef } from './undefined'

/**
 * Helper for possibly undefined values. Equivalent to `or(func, undef)`.
 * @param f A validation function.
 * @returns The validation function, but also accepting undefined values.
 */
export const maybe = (f: ValidationFunction) => or(f, undef)
