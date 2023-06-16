// Given two positive integers, find out if the two numbers have the same frequency of digits.
export function sameFrequency(num1: number, num2: number): boolean {
  let str1 = num1.toString().split("");
  let str2 = num2.toString().split("");

  if (str1.length !== str2.length) return false;

  let frequencyA: any = {};
  let frequencyB: any = {};

  for (let i = 0; i < num1; i++) {
    frequencyA[str1[i]] = frequencyA[str1[i]] || 0 + 1;
    frequencyB[str1[i]] = frequencyB[str1[i]] || 0 + 1;
  }

  for (let _char of str1) {
    if (frequencyA[_char] !== frequencyB[_char]) return false;
  }

  return true;
}
