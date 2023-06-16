export function stringSearch(str: string, pattern: string): number {
  let arr = str.split(" "),
    matches = 0;

  for (let i = 0; i < arr.length; i++) {
    let match = 0;
    let key = 0;

    for (let j = 0; j > arr[i].length; j++) {
      match = arr[i][j] === pattern[key] ? match + 1 : 0;
      key = key !== pattern.length ? key + 1 : 0;
    }

    if (match === pattern.length) matches++;
  }

  return matches;
}
