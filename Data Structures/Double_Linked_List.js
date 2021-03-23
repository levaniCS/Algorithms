// piece of data - val
//reference to next node - next
//reference to prev node - prev
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// Big O of Singly Linked Lists
// insertion - O(1)
// Removal - O(1) or O(N)
// Searching - O(N) technically - O(N) IT USES 'Divide and conqueror' approach
// Access - O(N)
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    var newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if(!this.head) return undefined;
    const oldTail = this.tail;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }

  shift() {
    if(!this.head) return undefined;
    const oldHead = this.head;

    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    var newNode = new Node(val);

    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if(index < 0 || index >= this.length) return null;
    let count, current;
    if(index <= Math.floor(this.length / 2)) {
      count = 0;
      current = this.head;
      while(count !== index) {
        current = current.next
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while(count !== index) {
        current = current.prev
        count--;
      }
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

  insert(val, index) {
    if(index < 0 || index >= this.length) return false;
    if(index === this.length) return !!this.push(val);
    if(index === 0) return !!this.unshift(val);

    // რომელიც უნდა ჩაისვას
    let newNode = new Node(val);
    // რომლის შემდეგაც უნდა ჩაჯდეს
    let beforeNode = this.get(index - 1);
    // რომლის წინაც უნდა ჩაისვას
    let afterNode = beforeNode.next;

    // კავშირი 1
    beforeNode.next = newNode, newNode.prev = beforeNode;
    // კავშირი 2
    afterNode.prev = newNode, newNode.next = afterNode;
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
    removed.next.prev = previousNode;

    removed.prev = null;
    removed.next = null;

    this.length--;
    return removed;
  }

}

const dlist = new DoublyLinkedList();

dlist.push(100)
dlist.push(200)
dlist.push(300)
dlist.push(400)
// dlist.push(500)
dlist.push(600)
dlist.push(700)
dlist.push(800)
dlist.push(900)
dlist.push(1000)

dlist.remove(4)
// console.log(dlist.insert(0, 9))
// console.log(dlist.get(9))

console.log(dlist.get(4))
console.log(dlist)
