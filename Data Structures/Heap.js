// Every parent is greater than its child node 
// also inserting starts always from left if its available

// Big O of Heaps
// insertion - O(Log n)
// removal - O(Log n)
// Searching - O(n)
class MaxBinaryHeap {
  constructor() {
    this.values = []
  }

  insert(element) {
    this.values.push(element)
    this.bubbleUp()
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();

    if(this.values.length > 0) {
      this.values[0] = end;
      // Trickle down
      this.sinkDown()
    }
    return max;
  }

  bubbleUp() {
    let idx = this.values.length - 1
    const element = this.values[idx]
    while(idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]

      if(element <= parent) break;
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

        if(leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if(rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];

        if(
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)) {
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


let heap = new MaxBinaryHeap()
heap.insert(20)
heap.insert(30)
heap.insert(40)
heap.insert(10)
heap.insert(100)
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()
console.log(heap)