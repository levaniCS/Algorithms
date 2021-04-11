class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Big O of BST
// insertion - O(Log n)
// Searching - O(Log n)
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if(!this.root) {
      this.root = newNode
      return this;
    } else {
      let current = this.root;
      while(true) {
        if(val === current.val) return undefined;
        if(val < current.val) {
          if(!current.left)  {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if(!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  contains(val) {
    if(!this.root) return false;
    let current = this.root,
        found = false;

    while(current && !found) {
      if(val < current.val) {
        current = current.left;
      } else if(val > current.val) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  BFS() {
    let data = [],
        queue = [], 
        node = this.root;

    while(queue.length) {
      node = queue.shift()
      data.push(node.val)
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
    return data
  }
  // Add when show instantly
  DFSPreOrder() {
    let data = []
    
    function traverse(node) {
      data.push(node.val)
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
    }
    traverse(this.root)
    return data;
  }
  // Add after expolore 
  DFSPostOrder() {
    let data = []
    
    function traverse(node) {
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
      data.push(node.val)
    }
    traverse(this.root)
    return data;
  }
  // Add after explore left side
  DFSInOrder() {
    let data = []
    
    function traverse(node) {
      if(node.left) traverse(node.left)
      data.push(node.val)
      if(node.right) traverse(node.right)
    }
    traverse(this.root)
    return data;
  }

}

const tree = new BinarySearchTree()

tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

console.log(tree.DFSPreOrder())
console.log(tree.DFSPostOrder())