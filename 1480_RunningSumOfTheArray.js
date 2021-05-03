// time : 1 min

// algo: create an arrow, put there nums[0]. Iterate through initial array starting with ind = 1 and
// push sum of num[i] and answ[i-1]

// comments: LOL

// task : Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.


var runningSum = function(nums) {
  let answ = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    answ.push(nums[i] + answ[i-1])
  }
  return answ
};