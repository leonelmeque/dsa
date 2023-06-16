export function productOfArray(arr: number[]): number {
  if (arr.length === 0) return 0;
  return arr[0] * productOfArray(arr.slice(1));
}
