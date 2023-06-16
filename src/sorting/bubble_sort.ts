export function bubbleSort(arr: number[]): number[] {
  let noSwaps = false;
  // We loop through the first iteration
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        noSwaps = false;
      }
    }
    // breaks the loop if there was no swaps
    if (noSwaps) break;
  }
  return arr;
}
