class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// LIFO - type of data structure (examples: undo/redo, routing in browser)
// Big O of Stacks
// insertion - O(1)
// Removal - O(1)
// Searching - O(N)
// Access - O(N)
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if(!this.first) return null;
    let temp = this.first;

    if(this.first === this.last) {
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    this.size--;
    return temp.val;
  }
}

const st = new Stack()

st.push(10)
st.push(20)
st.pop()
console.log(st.push(30))
