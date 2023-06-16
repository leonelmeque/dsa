class CustomNode<T> {
  next: CustomNode<T> | null;
  prev: CustomNode<T> | null;
  val: T;

  constructor(val: T) {
    this.next = null;
    this.prev = null;
    this.val = val;
  }
}

export class DoublyLinkedList<T> {
  head: CustomNode<T> | null;
  tail: CustomNode<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val: T) {
    const node = new CustomNode<T>(val);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    const node = this.tail;
    if (this.length === 0) return node;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      node.prev = null;
    }
    this.length--;
    return node;
  }

  get(index: number) {
    if (index <= 0 || index > this.length) return null;
    if (index === 0) return this.head;

    let count = 0;
    let current = null;
    const middleGround = Math.floor(this.length / 2);

    if (middleGround >= index) {
      current = this.head.next;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      current = this.tail.next;
      count = this.length - 1;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }

    return current;
  }

  shift() {
    if (this.length === 0) return undefined;

    const temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }

    this.length--;

    return temp;
  }

  unshift(val: T) {
    const node = new CustomNode(val);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;

    return this;
  }

  insert(index: number, val: T) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);

    const node = new CustomNode(val);
    const before = this.get(index);
    const after = before.next;

    node.next = after;
    node.prev = before;
    before.next = node;
    after.prev = node;

    this.length++;

    return this;
  }

  set<T>(index: number, val: T) {
    const node = this.get(index);

    if (!node) return false;
    else node.val = val;

    return true;
  }

  remove(index: number) {
    if (index < 0 || index > this.length) return undefined;
    else if (index === this.length - 1) return this.pop();
    else if (index === 0) return this.shift();

    const node = this.get(index);
    const before = node.prev;
    const after = before.next;

    before.next = after;
    after.prev = before;

    node.next = null;
    node.prev = null;

    this.length--;

    return node;
  }

  reverse() {
    if (this.length === 0) return this;

    let pointer = this.tail;
    const temp = this.head;

    this.head = this.tail;
    this.tail = temp;

    while (pointer !== null) {
      pointer.next = pointer.prev;
      pointer.prev = pointer.next;
      pointer = pointer.prev;
    }

    return this;
  }
}
