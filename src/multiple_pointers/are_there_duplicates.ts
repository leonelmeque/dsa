export function areThereDuplicates(...args: (number | string)[]): boolean {
  if (args.length === 0) return false;

  let top = 0;
  let bottom = args.length - 1;

  while (top < args.length - 1) {
    if (args[top] === args[bottom]) {
      return true;
    } else {
      bottom--;
    }

    if (top === bottom) {
      top++;
      bottom = args.length - 1;
    }
  }

  return false;
}
