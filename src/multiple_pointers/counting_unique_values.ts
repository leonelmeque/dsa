/**
 * This algoritm only works with sorted arrays
 */
export function countUniqueValues(arr: number[]): number {
  if (arr.length === 0) return 0;

  let top = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[top] !== arr[i]) {
      top++;
      arr[top] = arr[i];
    }
  }

  return top + 1;
}
