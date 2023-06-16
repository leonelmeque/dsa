/**
 * This simulates how Math.pow works
 */
export function power(num: number, pow: number): number {
  if (pow === 0) return 1;
  return num * power(num, pow - 1);
}
