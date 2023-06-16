export default function search(arr: number[], val: number): number {
  let min = 0,
    max = arr.length - 1,
    middle = null;

  while (min <= max) {
    middle = Math.floor((min + max) / 2);

    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}
