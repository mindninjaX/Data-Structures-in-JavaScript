class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const node = new Node(data);

    if (this.root === null) {
      this.root = node;
      return;
    }

    let current = this.root;

    while (current) {
      if (current.data > data) {
        if (current.left === null) {
          current.left = node;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = node;
          return;
        }
        current = current.right;
      }
    }
  }

  contains(data) {
    let current = this.root;

    while (current) {
      if (current.data === data) {
        return true;
      } else if (current.data > data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  preOrder() {
    let output = [];

    function preOrderImpl(node) {
      if (node === null) {
        return;
      }

      output.push(node.data);

      preOrderImpl(node.left);
      preOrderImpl(node.right);
    }

    preOrderImpl(this.root);
    return output;
  }

  inOrder() {
    let output = [];

    function inOrderImpl(node) {
      if (node === null) {
        return;
      }

      inOrderImpl(node.left);

      output.push(node.data);

      inOrderImpl(node.right);
    }

    inOrderImpl(this.root);
    return output;
  }

  postOrder() {
    let output = [];

    function postOrderImpl(node) {
      if (node === null) {
        return;
      }

      postOrderImpl(node.left);

      postOrderImpl(node.right);

      output.push(node.data);
    }

    postOrderImpl(this.root);
    return output;
  }

  maximum(node) {
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }

  remove(key) {
    this.removeImpl(key, this.root);
  }

  removeImpl(key, node) {
    if (node !== null) {
      if (key < node.data) {
        node.left = this.removeImpl(key, node.left);
      } else if (key > node.data) {
        node.right = this.removeImpl(key, node.right);
      } else {
        if (node.left && node.right) {
          node.data = this.maximum(node.left);
          node.left = this.removeImpl(node.data, node.left);
        } else {
          node = node.left || node.right;
        }
      }
    }
    return node;
  }
}

const bst = new BST();
bst.insert(5);
bst.insert(6);
bst.insert(7);
bst.contains(6); // Returns true
bst.preOrder(); // Returns [ 5, 6, 7 ]
bst.inOrder(); // Returns [ 5, 6, 7 ]
bst.postOrder(); // Returns [ 7, 6, 5 ]
bst.remove(6);
bst.contains(6); // Returns false
