function merge(arr1: number[], arr2: number[]) {
  // we initialize the values we need
  let results = [];
  let i = 0,
    j = 0;
  // the first loop runs to push values from one array to the main array we want to return
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  // if we still have values in arr1 we push those values to the main array
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  // if we still have values in arr2 we push them to the main array
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

// Time complexity O(n log n)
// Space complexity O(n log n)
export default function mergeSort(arr: number[]): number[] {
  //we return an array Immediately if this is true
  if (arr.length <= 1) return arr;
  // we find the middle value of the array
  const mid = Math.floor(arr.length / 2);
  // we call mergeSort again to split the array in half
  const left = mergeSort(arr.slice(0, mid));
  // once the left split is done we split the rest of the given array
  const right = mergeSort(arr.slice(mid));
  // once the split is complete we return the sorted array using this merge function
  return merge(left, right);
}
