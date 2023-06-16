export function selectionSort(arr: number[]): number[] {
  const swap = (arr: number[], i: number, lowest: number) =>
    ([arr[i], arr[lowest]] = [arr[lowest], arr[i]]);

  for (let i = 0; i < arr.length; i++) {
    // lowest number position
    let lowest = 0;
    for (let j = i + 1; j < arr.length; j++) {
      // storing the lowest postion
      if (arr[i] < arr[lowest]) lowest = j;
    }
    // swap if i and lowest are different
    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
}
