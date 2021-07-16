import { max } from './max'
import { min } from './min'
import { Limits } from '../types'

/**
 * Tests if the value is between the minimum and maximum values.
 * @param limits The limits to test.
 */
export const lim = (limits: Limits) => (o: any) =>
  max(limits.max)(o) && min(limits.min)(o)
