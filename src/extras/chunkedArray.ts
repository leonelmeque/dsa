function chunkArray(arr: number[] | string[], len: number) {
  let chunkedArray = [];

  // check if the array is empty so we can return early
  if (!arr.length) return [];
  else if (!len) return arr; // check if the len is 0 so that we return

  // checking if the arr length is higher or equal to len
  if (arr.length >= len) {
    // create a new copy chunk copy
    chunkedArray.push([...arr.slice(0, len)]);
    // in case the array has length of 1 return the last element
  } else if (arr.length === 1) return [arr];

  // removing the previously added elements
  arr.splice(0, len);
  // calling the function again to executed the same, but
  // it will concat to the next result
  chunkedArray = chunkedArray.concat(chunkArray(arr, len));

  return chunkedArray;
}

const result = chunkArray([1, 2, 3, 4, 5, 6, 7], 5);

console.log(result);
