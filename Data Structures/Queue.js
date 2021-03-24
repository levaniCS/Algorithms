class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// FIFO - type of data structure (examples: Background tasks, Uploading resources, Printing/Task processing)
// Big O of Stacks
// insertion - O(1)
// Removal - O(1)
// Searching - O(N)
// Access - O(N)
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueque(val) {
    const newNode = new Node(val);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeque() {
    if(!this.first) return null;
    let temp = this.first;

    if(this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

const q = new Queue()

