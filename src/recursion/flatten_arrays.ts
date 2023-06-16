export function flatten(arr: any[]): any[] {
  let output: any[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) output = output.concat(flatten(output[i]));
    else output.push(arr[i]);
  }

  return output;
}
