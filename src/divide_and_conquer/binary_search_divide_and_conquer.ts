export function bynarySearch(arr: number[], elem: number): number {
  let min = 0,
    max = arr.length - 1,
    middle = Math.floor((min - max) / 2);

  while (arr[middle] !== elem && min <= max) {
    if (arr[middle] > elem) max = middle - 1;
    else min = middle + 1;

    middle = Math.floor((min - max) / 2);
  }

  return arr[middle] === elem ? middle : -1;
}
