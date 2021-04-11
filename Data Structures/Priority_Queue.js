// The Lowest number has the highest priority
// examples: in hospital peoples => corona virus, the flu, low fever, drunk ext.

// Time complexity: O(n) - insert/remove
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = []
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode)
    this.bubbleUp()
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();

    if(this.values.length > 0) {
      this.values[0] = end;
      // Trickle down
      this.sinkDown()
    }
    return min;
  }

  bubbleUp() {
    let idx = this.values.length - 1
    const element = this.values[idx]
    while(idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]

      if(element.priority >= parent.priority) break;
      // Swap values parent and child
      this.values[parentIdx] = element
      this.values[idx] = parent
      idx = parentIdx
    }
  }

  sinkDown() {
     let idx = 0;
     const length = this.values.length;
     const element = this.values[0];

    while(true) {
      const leftChildIdx = 2 * idx + 1;
      const rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if(leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];

        if(leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if(rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];

        if(
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)) {
          swap = rightChildIdx;
        }
      }

      if(swap === null) break

      this.values[idx] = this.values[swap];
      this.values[swap] = element;

      idx = swap;
    }
  }
}


let pq = new PriorityQueue()

pq.enqueue('Common cold', 5)
pq.enqueue('Gunshot wound', 0)
pq.enqueue('High fever', 2)
pq.enqueue('Corona Virus', 1)

pq.dequeue()
pq.dequeue()
console.log(pq)