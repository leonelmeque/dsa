export function nestedEvenSum(input: { [key: string]: any }): number {
  const keys = Object.keys(input);
  let sum = 0;

  for (let key of keys) {
    let digit = input[key];
    if (typeof digit === "number" && digit % 2 === 0) {
      sum += digit;
    } else if (!Array.isArray(input[key]) && typeof input[key] === "object") {
      sum += nestedEvenSum(input[key]);
    }
  }

  return sum;
}
