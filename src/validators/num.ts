/**
 * Returns true if the given data is a number.
 * @param o The data to test.
 * @returns True if the data is a number.
 * @example
 * num(2)   // true
 * num('a') // false
 */
export const num = (o: any) => typeof o === 'number'
