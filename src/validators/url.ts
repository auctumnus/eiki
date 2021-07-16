import { str } from './str'

const isUrl = (s: string) => {
  try {
    new URL(s)
    return true
  } catch (_) {
    return false
  }
}

/**
 * Returns true if `o` is a URL.
 * @param o The data to test.
 * @returns A boolean describing if the data is a url.
 * @example
 * ```
 * url('https://google.com') // true
 * url(2)                    // false
 * url('aaaa')               // false
 * ```
 */
export const url = (o: any) => str(o) && isUrl(o)
