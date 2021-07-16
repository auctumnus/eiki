/**
 * An object which describes a maximum and minimum value.
 * These are exclusive limits; values checked will be valid if in (max, min).
 */
export interface Limits {
  max?: number
  min?: number
}
/**
 * A function which can be used to validate values.
 */
export type ValidationFunction = (o: any) => boolean
