/**
 * Best to use this with HOF like slice, concact and also spread operator
 */
export function pure_recursion(arr: number[]): number[] {
  let output = [];

  if (output.length === 0) return output;

  if (!(arr[0] % 2)) output.push(arr[0]);

  output = output.concat(pure_recursion(arr.slice(1)));
  return output;
}
