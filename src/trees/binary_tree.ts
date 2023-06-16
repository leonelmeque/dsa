class TreeNode<T> {
  val: T;
  right: TreeNode<T> | null;
  left: TreeNode<T> | null;

  constructor(val: T) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

export class BinaryTree<T> {
  root: TreeNode<T>;
  constructor() {
    this.root = null;
  }

  insert(val: T) {
    if (this.root === null) {
      this.root = new TreeNode<T>(val);
    } else {
      const node = new TreeNode<T>(val);
      let current = this.root;

      while (true) {
        if (val === current.val) return undefined;

        if (node.val < current.val) {
          if (current.left === null) {
            current.left = node;
            return this;
          } else current = current.left;
        } else if (node.val > current.val) {
          if (current.right === null) {
            current.right = node;
            return this;
          } else current = current.right;
        }
      }
    }

    return this;
  }

  find(val: T) {
    if (this.root === null) return undefined;
    if (val === this.root.val) return this.root;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (val < current.val) current = current.left;
      else if (val > current.val) current = current.right;
      else found = true;
    }

    return found;
  }

  getHeight(node: TreeNode<T>) {
    if (node === null) return 0;

    const leftHeight = this.getHeight(node.left);
    const rightHeight = this.getHeight(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  // Horizontal search
  breadthFirstSearch() {
    const data = [];
    const queue = [];
    let node = this.root;

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  // Vertical search
  depthFirstSearchPreOder() {
    const data: T[] = [];

    function search(node: TreeNode<T>) {
      data.push(node.val);
      if (node.left) search(node.left);
      if (node.right) search(node.right);
    }

    search(this.root);
    return data;
  }

  depthFirstSearchPostOrder() {
    const data: T[] = [];

    function search(node: TreeNode<T>) {
      if (node.left) search(node.left);
      if (node.right) search(node.right);

      data.push(node.val);
    }

    search(this.root);

    return data;
  }

  depthFirstSearchInOrder() {
    const data: T[] = [];

    function search(node: TreeNode<T>) {
      if (node.left) search(node.left);
      data.push(node.val);
      if (node.right) search(node.right);
    }

    search(this.root);

    return data;
  }
}
