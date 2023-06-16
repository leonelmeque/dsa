export function validAnagram(stringA: string, stringB: string): boolean {
  if (stringA.length !== stringB.length) return false;

  const strA: any = {};
  const strB: any = {};

  for (let i = 0; i <= stringA.length; i++) {
    strA[stringA.charAt(i)] = strA[stringA.charAt(i)] || 0 + 1;
    strB[stringB.charAt(i)] = strB[stringB.charAt(i)] || 0 + 1;
  }

  for (let j = 0; j <= stringA.length; j++) {
    if (strA[stringA.charAt(j)] !== strB[stringA.charAt(j)]) {
      return false;
    }
  }

  return true;
}

// This solution only uses one loop and less memory
export function _validAnagram(stringA: string, stringB: string): boolean {
  if (stringA.length !== stringB.length) return false;

  const setA = stringA.split("").sort();
  const setB = stringB.split("").sort();

  for (let key in setA) {
    if (setA[key] !== setB[key]) return false;
  }

  return true;
}
