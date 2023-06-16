// LIFO

class StackNode<T> {
  val: T;
  next: StackNode<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export class Stack<T> {
  first: StackNode<T>;
  last: StackNode<T>;
  size: 0;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val: T) {
    const node = new StackNode<T>(val);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }

    this.size++;

    return this;
  }

  pop() {
    if (this.size === 0) return undefined;
    else if (this.size === 1) this.last = null;

    this.first = this.first.next;
    this.size--;

    return this.first;
  }

  print(callback: (val: T) => void) {
    const arr = [];
    let current = this.first;
    while (current) {
      arr.push(callback(current.val));
      current = current.next;
    }
    return arr.join(" ^\n | ");
  }
}
