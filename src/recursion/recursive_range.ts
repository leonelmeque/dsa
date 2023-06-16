/**
 * Given a number return the result of all numbers that could be added up
 */
export function recursiveRange(num: number): number {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}
