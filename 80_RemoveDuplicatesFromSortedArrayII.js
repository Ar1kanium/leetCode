// time : 4 mins

// algo: let's iterate through the array, if there are more than two duplicates (array is sorted), it means, that 
//  we need to just splice i(or i - 1, or i + 1) until [i-1]===[i+1]

// comments: read task more time, than wrote code:D

// task : Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice 
// and return the new length.
// Do not allocate extra space for another array; you must do this by modifying the input array in-place with O(1) extra memory.

// Clarification:

// Confused why the returned value is an integer, but your answer is an array?

// Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller.



var removeDuplicates = function(nums) {
  for (let i = 1; i< nums.length - 1; i++) {
    while (nums[i-1] === nums[i+1]) nums.splice(i,1)
  }
  return nums.length
};
