class ListNode<T> {
  val: T;
  next: null | ListNode<T>;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export class SinglyLinkedList<T> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: T) {
    const node = new ListNode(value);

    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  pop() {
    let head = this.head;
    let newTail = head;
    let current = head;

    if (head === null) {
      return undefined;
    } else {
      while (current.next !== null) {
        newTail = current;
        current = current.next;
      }

      this.tail = newTail;
      this.tail.next = null;
      this.length--;

      if (this.length === 0) {
        this.head = null;
        this.length = null;
      }
    }

    return current;
  }

  shift() {
    if (this.head === null) return undefined;

    let temp = this.head;
    this.head = temp.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return temp;
  }

  unshift(val: T) {
    const node = new ListNode(val);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return this;
  }

  get(index: number) {
    let current = this.head;
    let count = 0;

    if (index < 0 || index >= this.length) return undefined;

    while (count !== index) {
      current = current.next;
      count++;
    }

    return current;
  }

  set(index: number, value: T) {
    const node = this.get(index);
    if (node === null) return false;

    node.val = value;

    return true;
  }

  insert(index: number, value: T) {
    if (index > this.length || index < 0) return false;
    if (index === this.length && index > 0) {
      this.push(value);
    } else if (index === 0) {
      this.unshift(value);
    } else {
      const node = new ListNode(value);
      const previous = this.get(index - 1);
      const next = this.get(index);

      previous.next = node;
      node.next = next;
      this.length++;
    }
    return true;
  }

  remove(index: number) {
    if (index < 0 || index > this.length - 1) return undefined;
    else if (index === this.length - 1) return this.pop();
    else if (index === 0) return this.shift();

    const prev = this.get(index - 1);
    const removed = prev.next;

    prev.next = removed.next;
    this.length--;

    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next = null;
    let prev = null;
    let counter = this.length;

    while (counter < this.length) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
      counter++;
    }

    return this;
  }
}
