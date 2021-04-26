// time : 6 mins

// algo: assign value of nums.length to variable, iterate through an array, splice 0's and push them, decreasing variable
//  repeat untill variable is > 0 and < var

// comments: trick is that we need additional variable to track if we have already pushed all 0's to the end. 

// task : Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

var moveZeroes = function(nums) {
  let len = nums.length
  for (let i = 0; i < len; i++) {
    while (nums[i] === 0 && len) {
      nums.splice(i, 1)
      nums.push(0)
      len--
    }
  }
  return nums
};