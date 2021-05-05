// time : 24 mins

// algo: we need to find jump step with the highest value of available next step, to have the least amount of jumps.
// so, let's create a counter variable, to count amount of jumps, and check all values of nums array in range nums[pos]
// keep in mind, that each next step passively increases jump legth. return counter, when pos+nums[pos] >= last elem of nums.

// comments: 

// task : Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
// Each element in the array represents your maximum jump length at that position.
// Your goal is to reach the last index in the minimum number of jumps.
// You can assume that you can always reach the last index. 


var jump = function(nums) {
  if (nums.length === 1) return 0
  let counter = 0
  let pos = 0
  while (true) {
    counter++
    if (pos+nums[pos] >= nums.length - 1) return counter
    let ind = nums[pos] + pos
    for (let i = ind - 1; i> pos; i--) {
      if (nums[ind] < nums[i] - ind + i) ind = i
    }
    pos+= (ind - pos)
  }
};
