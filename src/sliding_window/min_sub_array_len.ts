export function minSubArrayLen(nums: number[], sum: number) {
  let total = 0,
    start = 0,
    end = 0,
    minLen = 0;

  while (start < nums.length) {
    /**
     * if current window doesn't add up to the given sum then
     * move the window to the right
     */
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
    }
  }
}
