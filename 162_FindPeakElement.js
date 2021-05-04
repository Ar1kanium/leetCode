// time : 5 mins

// algo: i think code here speaks better than anything

// comments: pretty easy problem, dunno, why is it medium 

// task : A peak element is an element that is strictly greater than its neighbors.
// Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks,
// return the index to any of the peaks.
// You may imagine that nums[-1] = nums[n] = -∞.


var findPeakElement = function(nums) {
  if (nums.length === 1 || nums[0] > nums[1]) return 0
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i+1] && nums[i] > nums[i-1]) return i
  }
  if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1
};