#
# You are given a binary tree. Can you in-place convert it into a doubly-linked list?
#

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function convertToDoublyLinkedList(root) {
  if (!root) {
    return null;
  }

  let prev = null;

  function inOrderTraversal(node) {
    if (!node) {
      return;
    }

    inOrderTraversal(node.left);

    // Modify the tree node to form a doubly-linked list
    node.left = prev;
    if (prev) {
      prev.right = node;
    }

    prev = node;

    inOrderTraversal(node.right);
  }

  // Start in-order traversal from the root
  inOrderTraversal(root);

  // Move to the head of the doubly-linked list
  while (root.left) {
    root = root.left;
  }

  return root;
}

// Example usage:
// Construct a binary tree
const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(6);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(7);

// Convert the binary tree to a doubly-linked list
const headOfDoublyLinkedList = convertToDoublyLinkedList(root);

// Print the doubly-linked list
while (headOfDoublyLinkedList) {
  console.log(headOfDoublyLinkedList.value);
  headOfDoublyLinkedList = headOfDoublyLinkedList.right;
}
