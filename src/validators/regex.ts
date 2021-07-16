import { str } from './str'

/**
 * Returns a function which can validate a value against a given regex.
 * @param regex The regex to test with.
 * @returns A function which can test using that regex.
 */
export const regex = (r: RegExp) => (o: any) => str(o) && r.test(o)
