export function fibonnaci(num: number): number {
  if (num === 0) return 0;
  if (num <= 2) return 1;

  return fibonnaci(num - 2) + fibonnaci(num - 1);
}
