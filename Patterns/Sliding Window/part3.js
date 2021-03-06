function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    // წინა გამოაკელი და მიმდინარე დაუმატე
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2,6,29,,1,8,5,6,3],3)


function minSubArrayLen(nums, sum) {
  let total = 0;
  
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  if (!arr || !num) return false

   while (start < nums.length) {
  // if current window doesn't add up to the given sum then 
  // move the window to right
  if(total < sum && end < nums.length){
    total += nums[end];
    end++;
  }
  // if current window adds up to at least the sum given then
  // we can shrink the window 
  else if(total >= sum){
    minLen = Math.min(minLen, end-start);
    total -= nums[start];
    start++;
  } 
  // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
  else {
    break;
  }
}

return minLen === Infinity ? 0 : minLen;

}

minSubArrayLen([2,2,5,6], 6)




function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}
