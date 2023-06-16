// FIFO

class QueueNode<T> {
  val: T;
  next: QueueNode<T> | null;
  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export class Queue<T> {
  first: QueueNode<T> | null;
  last: QueueNode<T> | null;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val: T) {
    const node = new QueueNode<T>(val);

    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    this.size++;

    return this;
  }

  dequeue() {
    if (this.size === 0) return undefined;
    if (this.size === 1) this.last = null;

    const aux = this.first;
    this.first = this.first.next;
    aux.next = null;

    this.size--;

    return aux;
  }

  print(callback: (val: T) => void) {
    const arr = [];
    let current = this.first;
    while (current) {
      arr.push(callback(current.val));
      current = current.next;
    }

    return arr.join(" -> ");
  }
}
