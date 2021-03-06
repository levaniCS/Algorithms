// Optimized BubbleSort with noSwaps
//  Time complexity
//        General: O(N^2)
//        Nearly sorted array: O(N) (The best case)

// We swapping over over and over again untill
// Biggest element bubbles at the end
function bubbleSort(arr){
  let noSwaps;
  for(let i = arr.length; i > 0; i--){
    noSwaps = true;
    for(let j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;         
      }
    }

    // Array is already sorteed!
    if(noSwaps) break;
  }
  return arr;
}

bubbleSort([1,8,2,3,4,5,6,7]);