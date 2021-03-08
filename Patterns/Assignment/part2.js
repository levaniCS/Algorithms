
// Multiple pointers
function averagePair(arr, num){
  let start = 0
  let end = arr.length-1;
  while(start < end){
    let avg = (arr[start]+arr[end]) / 2 
    if(avg === num) return true;
    else if(avg < num) start++
    else end--
  }
  return false;
}

averagePair([1,3,3,5,6,7,10,12,19], 8)


function isSubsequence(targetStr, str2) {

  if(!targetStr || !str2 || targetStr.length > str2.length) return false

  let tarPointer = 0;
  let str2Pointer = 0;

  while(str2Pointer < str2.length) {
          
      if(targetStr[tarPointer] === str2[str2Pointer]) {
          ++tarPointer;
      }

      if(tarPointer === targetStr.length) return true
      
      ++str2Pointer;
  }

  return false;
}
