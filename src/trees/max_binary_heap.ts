export class MaxBinaryHeap<T> {
  values: T[];
  constructor() {
    this.values = [];
  }

  insert(element: T) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    // Find the last element in the array
    let index = this.values.length - 1;
    const child = this.values[index];

    while (index > 0) {
      // using formula (n-1)/2 we can get the index of the parent
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      // we stop the loop if this condition is met
      if (child <= parent) break;

      // we swap the values if child is higher than the parent
      this.values[parentIndex] = child;
      this.values[index] = parent;

      // the next child index will be the parent index found above
      index = parentIndex;
    }
  }

  extractMax() {
    // take the root node and the last node in the array
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      // the last node will be added to the top and sinked down the three
      this.values[0] = end;
      this.bubbleDown();
    }

    return max;
  }

  bubbleDown() {
    let index = 0;
    const currentChild = this.values[index];
    const length = this.values.length;

    while (true) {
      // the formula used is (2 * n + 1) for left node and for right
      // we use (2 * n + 2)
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      // we should prevent from this getting out of bounds
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > currentChild) swap = leftChildIndex;
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > currentChild) ||
          (swap !== null && rightChild > leftChild)
        )
          swap = rightChildIndex;
      }

      if (swap === null) break; // break if there were no swaps

      // then we change the index value to the swap value
      this.values[index] = this.values[swap];

      // and we take the swap index and place the child that we need to sink down
      this.values[swap] = currentChild;

      // assign the old root position
      index = swap;
    }
  }
}
