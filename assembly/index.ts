// The entry file of your WebAssembly module.

/**
 * This is my hot new function.
 * @param a this is an integer
 * @param b this is hopefully also an integer
 * @returns sum of the integers
 */
export function add(a: i32, b: i32): i32 {
  return a + b;
}
