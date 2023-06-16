export function collectStrings(input: { [key: string]: any }): string[] {
  let arr: string[] = [];
  let keys = Object.keys(input);

  for (let key of keys) {
    if (typeof input[key] === "string") {
      arr.push(input[key]);
    } else if (!Array.isArray(input[key]) && typeof input[key] === "object") {
      arr = arr.concat(collectStrings(input[key]));
    }
  }

  return arr;
}
