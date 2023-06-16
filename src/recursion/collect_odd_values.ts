export function collectOddValues(arr: number[]): number[] {
  let output: number[] = [];

  function recursion(input: number[]): void {
    if (input.length === 0) return;

    if (input[0] % 2 !== 0) {
      output.push(input[0]);
    }

    recursion(input.slice(1));
  }

  recursion(output);

  return output;
}
