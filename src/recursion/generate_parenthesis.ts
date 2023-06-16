export function generateParenthesis(n: number): string[] {
  if (n === 0) return [];
  if (n === 1) return ["()"];

  const arr: string[] = [];

  function generator(left: number, right: number, combine: string) {
    if (left === 0 && right === 0) {
      arr.push(combine);
      return;
    }

    if (left < right) generator(left, right - 1, combine + ")");
    if (left > 0) generator(left - 1, right, combine + "(");
  }

  generator(n, n, "");

  return arr;
}
