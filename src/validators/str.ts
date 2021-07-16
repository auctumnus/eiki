/**
 * Returns true if `o` is a string.
 * @param o The data to test.
 * @returns A boolean describing if the data is a string.
 * @example
 * str('eiki') // true
 * str(3)      // false
 * str(['a'])  // false
 */
export const str = (o: any) => typeof o === 'string'
