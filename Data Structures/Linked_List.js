// piece of data - val
//reference to next node - next
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Big O of Singly Linked Lists
// insertion - O(1)
// Removal - O(1) or O(N)
// Searching - O(N)
// Access - O(N)
class SinglyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  get(index) {
    if(index < 0 || index >= this.length) return null;
    let counter = 0;
    let counter = this.head;

    while(counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(val, index) {
    const foundNode = this.get(index);
    if(foundNode) {
      foundNode.val = val
      return true
    }
    return false
  }
  push(val){
    var newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }
  pop() {
    if(!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while(current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }
  shift() {
    if(!this.head) return undefined;
    const currentHead = this.head
    this.head = currentHead.next
    this.length--;

    return currentHead;
  }
  unshift(val) {
    var newNode = new Node(val);

    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return this;
  }
  insert(val, index) {
    if(index < 0 || index > this.length) return false;
    if(index === this.length) return !!this.push(val);
    if(index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    // რომლის შემდეგაც უნდა ჩაჯდეს
    let prev = this.get(index - 1);
    // ჩასმა ორ ნოუდს შორის
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;

    this.length++;
    return true;
  }
  remove(index) {
    if(index < 0 || index >= this.length) return null;
    if(index === 0) return !!this.shift()
    if(index === this.length - 1) return this.pop()

    var previousNode = this.get(index -1);
    var removed = previousNode.next;
    // ამოგდება
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    // Swap head & tail
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    // Save current iteration variables
    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;

      prev = node;
      node = next;
    }
    return this;
  }
}

var list = new SinglyLinkedList()

list.unshift(2)
list.unshift(3)
list.unshift(4)
list.unshift(5)
list.unshift(6)

list.reverse()
