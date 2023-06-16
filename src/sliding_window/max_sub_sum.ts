export function maxSubSum(arr: number[], num: number): number | null {
  if (arr.length < num) return null;

  let maxSum = 0,
    temp = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  temp = maxSum;

  for (let j = num; j < arr.length; j++) {
    temp += arr[j] - arr[j - num];
    maxSum = Math.max(maxSum, temp);
  }

  return maxSum;
}
