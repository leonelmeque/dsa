export function isSubsequence(stringA: string, stringB: string): boolean {
  let top = 0;
  let bottom = 0;

  if (stringA.length === 0 || stringB.length === 0) return false;

  while (bottom < stringB.length) {
    if (top === stringA.length) return true;

    if (stringA[top] === stringB[bottom]) top++;

    bottom++;
  }

  return false;
}

// isSubsequence('abc', 'abracadabra'); // true
