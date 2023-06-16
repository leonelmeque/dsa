type FrequenceCounter = {
  [key: number | string]: number;
};

export function same(arrA: number[], arrB: number[]): boolean {
  if (arrA.length !== arrB.length) return false;

  let counterA: FrequenceCounter = {};
  let counterB: FrequenceCounter = {};

  for (let val of arrA) {
    counterA[val] = counterA[val] || 0 + 1;
  }

  for (let val of arrB) {
    counterB[val] = counterB[val] || 0 + 1;
  }

  for (let key in counterA) {
    if (!(Number(key) ** 2 in counterB)) {
      return false;
    }

    if (counterB[Number(key) ** 2] !== counterA[key]) {
      return false;
    }
  }

  return true;
}
