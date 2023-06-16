export function averagePair(...args: [number[], number]): boolean {
  // if array has less than 2 elements
  if (args[0].length < 2) return false;

  let top = 0;
  let bottom = args[0].length - 1;

  while (top < bottom) {
    let average = (args[0][top] + args[0][bottom]) / 2;

    if (average === args[1]) return true;
    else if (average < args[1]) top++;
    else bottom--;
  }

  return false;
}

// [1,2,3],2.5
