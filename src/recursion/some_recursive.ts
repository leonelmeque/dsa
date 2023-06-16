function isOdd(val: number) {
  return val % 2 === 0;
}
export function someRecursive(
  arr: number[],
  callback: Function = isOdd
): boolean {
  if (arr.length === 0) return false;
  if (callback(arr[arr.length - 1])) return true;

  arr.pop();

  return someRecursive(arr, callback);
}
